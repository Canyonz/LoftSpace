import { MultipleSelection, Price } from "@/entities/filter";
import styles from "./Filter.module.sass";
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/button/Button";
import { useGetCatalog } from "@/features/catalog/api/useGetCatalog";
const filterCategory = [
	{
		value: "Диваны",
		checked: false,
		content: "Диваны",
	},
	{
		value: "Стулья",
		checked: false,
		content: "Стулья",
	},
	{
		value: "Кресла",
		checked: false,
		content: "Кресла",
	},
];

const filterColors = [
	{
		value: "Белый",
		checked: false,
		content: "Белый",
	},
	{
		value: "Черный",
		checked: false,
		content: "Черный",
	},
	{
		value: "Красный",
		checked: false,
		content: "Красный",
	},
];

const filterMaterials = [
	{
		value: "Ткань",
		checked: false,
		content: "Ткань",
	},
	{
		value: "Кожа",
		checked: false,
		content: "Кожа",
	},
	{
		value: "Дерево",
		checked: false,
		content: "Дерево",
	},
];

const filterTypes = [
	{
		value: "Кривая",
		checked: false,
		content: "Кривая",
	},
	{
		value: "Изогнутая",
		checked: false,
		content: "Изогнутая",
	},
	{
		value: "Круглая",
		checked: false,
		content: "Круглая",
	},
];

const filterCollections = [
	{
		value: "Loft Minimal",
		checked: false,
		content: "Loft Minimal",
	},
	{
		value: "Loft Grace",
		checked: false,
		content: "Loft Grace",
	},
	{
		value: "Loft Elite",
		checked: false,
		content: "Loft Elite",
	},
];

export const Filter = ({ onClickApply, onClickReset }) => {
	const { products } = useGetCatalog();

	const [checkedCategories, setCheckedCategories] = useState([]);
	const [checkedColors, setCheckedColors] = useState([]);
	const [checkedMaterials, setCheckedMaterials] = useState([]);
	const [checkedTypes, setCheckedTypes] = useState([]);
	const [checkedCollections, setCheckedCollections] = useState([]);

	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [minPriceFromData, setMinPriceFromData] = useState(0);
	const [maxPriceFromData, setMaxPriceFromData] = useState(0);

	useEffect(() => {
		const allCategory = {};

		const findFilterItems = (filter) => {
			return products
				.map((product) => {
					return {
						value: product[filter],
						checked: false,
					};
				})
				.filter(({ value }) => !allCategory[value] && (allCategory[value] = 1));
		};

		const minPriceData = products.reduce((acc, cur) => Math.min(acc, cur.price), products[0]?.price);
		const maxPriceData = products.reduce((acc, cur) => Math.max(acc, cur.price), 0);

		setCheckedCategories(findFilterItems("category"));
		setCheckedColors(findFilterItems("color"));
		setCheckedMaterials(findFilterItems("material"));
		setCheckedTypes(findFilterItems("type"));
		setCheckedCollections(findFilterItems("collection"));
		setMinPriceFromData(minPriceData);
		setMaxPriceFromData(maxPriceData);
	}, [products]);

	const findCheckedFilter = (groupBox, value) => {
		return groupBox.map((checkbox) => {
			if (checkbox.value === value) return { ...checkbox, checked: !checkbox.checked };

			return checkbox;
		});
	};

	const clickCheckedCategory = (value) => () => {
		setCheckedCategories((prev) => findCheckedFilter(prev, value));
	};

	const clickCheckedColor = (value) => () => {
		setCheckedColors((prev) => findCheckedFilter(prev, value));
	};

	const clickCheckedMaterials = (value) => () => {
		setCheckedMaterials((prev) => findCheckedFilter(prev, value));
	};

	const clickCheckedTypes = (value) => () => {
		setCheckedTypes((prev) => findCheckedFilter(prev, value));
	};

	const clickCheckedCollections = (value) => () => {
		setCheckedCollections((prev) => findCheckedFilter(prev, value));
	};

	const handleChangeMinPrice = (value) => {
		setMinPrice(value);
	};

	const handleChangeMaxPrice = (value) => {
		setMaxPrice(value);
	};

	const checkedFilter = (filter) => {
		return filter.filter((filt) => filt.checked).map((filt) => filt.value);
	};

	const onFiltersSearch = () => {
		const checkedFilters = {
			category: checkedFilter(checkedCategories),
			price_gte: !minPrice ? undefined : Number(minPrice.replace(/\s/g, "")),
			price_lte: !maxPrice ? undefined : Number(maxPrice.replace(/\s/g, "")),
			color: checkedFilter(checkedColors),
			material: checkedFilter(checkedMaterials),
			type: checkedFilter(checkedTypes),
			collection: checkedFilter(checkedCollections),
		};

		onClickApply(checkedFilters);
	};

	const onFilterReset = (prev) => {
		return prev.map((checkbox) => ({ ...checkbox, checked: false }));
	};

	const onFiltersClear = () => {
		onClickReset([]);
		setCheckedCategories((prev) => onFilterReset(prev));
		setCheckedColors((prev) => onFilterReset(prev));
		setCheckedMaterials((prev) => onFilterReset(prev));
		setCheckedTypes((prev) => onFilterReset(prev));
		setCheckedCollections((prev) => onFilterReset(prev));
	};

	return (
		<aside className={styles.aside}>
			<h2 className={styles.title}>Новинки</h2>
			<div className={styles.filter}>
				<div className={styles.filtersWrapper}>
					<MultipleSelection title={"Категории"} items={checkedCategories} opened onChange={clickCheckedCategory} />
					<Price
						title="Цена"
						minPrice={minPrice}
						maxPrice={maxPrice}
						minPriceFromData={minPriceFromData}
						maxPriceFromData={maxPriceFromData}
						handleChangeMinPrice={handleChangeMinPrice}
						handleChangeMaxPrice={handleChangeMaxPrice}
					/>
					<MultipleSelection title={"Цвет"} items={checkedColors} onChange={clickCheckedColor} />
					<MultipleSelection title={"Материал"} items={checkedMaterials} onChange={clickCheckedMaterials} />
					<MultipleSelection title={"Тип ткани"} items={checkedTypes} onChange={clickCheckedTypes} />
					<MultipleSelection title={"Коллекция"} items={checkedCollections} onChange={clickCheckedCollections} />
				</div>
				<div className={styles.buttons}>
					<Button size="s" isBorder onClick={onFiltersSearch}>
						Применить
					</Button>
					<Button variant="secondary" size="s" isBorder onClick={onFiltersClear}>
						Сброс
					</Button>
				</div>
			</div>
		</aside>
	);
};
