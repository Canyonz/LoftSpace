import { Button } from "@/shared/ui/button/Button";
import { Input } from "@/shared/ui/input/Input";
import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import styles from "./CatalogPage.module.sass";
import SearchSVG from "@/shared/assets/icon/search.svg";
import { Listbox } from "@/shared/ui/listbox/Listbox";
import { ProductCard } from "@/entities/productCard/ProductCard";
import ArrowLinkSVG from "@/shared/assets/icon/arrowLink.svg";
import { useMemo, useState } from "react";
import { useGetCatalog } from "@/features/catalog/api/useGetCatalog";
import { Filter } from "@/features/filter";

const sortItems = [
	{
		id: 1,
		value: "price",
		order: "desc",
		content: "по убыванию цены",
	},
	{
		id: 2,
		value: "price",
		order: "asc",
		content: "по возрастанию цены",
	},
];

export const CatalogPage = () => {
	const [filters, setFilters] = useState([]);
	const [sort, setSort] = useState("");
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(6);

	const filteries = useMemo(() => {
		return {
			_page: page,
			_limit: limit,
			_sort: sort.value,
			_order: sort.order,
			...filters,
			q: search,
		};
	}, [filters, limit, page, search, sort.order, sort.value]);

	const { products, isLoading, error } = useGetCatalog(filteries);

	const hasMore = products.length >= limit;

	const onChangeFilers = (value) => {
		setFilters(value);
		setPage(1);
	};
	const onResetFilers = (value) => {
		setFilters(value);
		setPage(1);
	};

	const onSelectListBox = (value) => {
		setSort(value);
	};

	const onChangeSearch = (e) => {
		setSearch(e.target.value);
	};

	const onChangePage = (value) => () => {
		if (!hasMore && value >= page) return;
		setPage(value);
	};

	const onChangeUpPage = () => {
		if (!hasMore) return;
		setPage((prev) => prev + 1);
		setLimit(6);
	};

	const onChangeDownPage = () => {
		if (page <= 1) return;
		setPage((prev) => prev - 1);
		setLimit(6);
	};

	const onChangeLimit = () => {
		if (hasMore) setLimit((prev) => prev + 6);
	};

	return (
		<main className={styles.catalogPage}>
			<div className={styles.catalogWrapper}>
				<Filter onClickApply={onChangeFilers} onClickReset={onResetFilers} />
				<div className={styles.container}>
					<div className={styles.header}>
						<Listbox items={sortItems} className={styles.sort} value={sort} onClick={onSelectListBox} />
						<Input
							placeholder="Поиск"
							size="m"
							addonRight={<AppIcon Svg={SearchSVG} color="secondary" clickable />}
							className={styles.search}
							value={search}
							onChange={onChangeSearch}
						/>
					</div>
					<div className={styles.cardsWrapper}>
						{products.map((product) => (
							<ProductCard key={product.id} item={product} />
						))}
					</div>
					<div className={styles.footer}>
						<Button variant="secondary" isBorder maxWidth size="s" onClick={onChangeLimit}>
							Показать еще
						</Button>
						<div className={styles.paginationPage}>
							<AppIcon Svg={ArrowLinkSVG} clickable color="secondary" className={styles.btnBackPage} onClick={onChangeDownPage} />
							{[...Array(3)].map((_, index) => (
								<button key={index} className={styles.pageNumber} onClick={onChangePage(index + 1)}>
									{index + 1}
								</button>
							))}
							<AppIcon
								Svg={ArrowLinkSVG}
								clickable
								color="secondary"
								className={styles.btnForwardPage}
								onClick={onChangeUpPage}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
