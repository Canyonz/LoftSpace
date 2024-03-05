import { useMemo, useState } from "react";
import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import { Listbox } from "@/shared/ui/listbox/Listbox";
import { ProductNotFound } from "@/entities/productNotFound";
import { ProductCard } from "@/entities/productCard/ProductCard";
import { SearchInput } from "@/entities/filter";
import { Filter } from "@/features/filter";
import { Page } from "@/widgets/page/Page";
import { useGetCatalog } from "@/shared/lib/hooks/useGetCatalog";
import styles from "./CatalogPage.module.sass";
import SearchSVG from "@/shared/assets/icon/search.svg";
import { Pagination } from "@/features/pagination/ui/Pagination";

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

	const filteries = useMemo(
		() => ({
			_page: page,
			_limit: limit,
			_sort: sort.value,
			_order: sort.order,
			...filters,
			q: search,
		}),
		[filters, limit, page, search, sort.order, sort.value]
	);

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

	const productsContainer = products.length ? (
		<div className={styles.cardsWrapper}>
			{products.map((product) => (
				<ProductCard key={product.id} item={product} />
			))}
		</div>
	) : (
		<ProductNotFound className={styles.productNotFound} />
	);

	return (
		<Page className={styles.catalogPage}>
			<div className={styles.catalogWrapper}>
				<Filter onClickApply={onChangeFilers} onClickReset={onResetFilers} />
				<div className={styles.container}>
					<div className={styles.top}>
						<Listbox items={sortItems} className={styles.sort} value={sort} onClick={onSelectListBox} />
						<SearchInput
							placeholder="Поиск"
							size="m"
							addonRight={<AppIcon Svg={SearchSVG} color="secondary" clickable />}
							className={styles.search}
							value={search}
							onChange={onChangeSearch}
						/>
					</div>
					{productsContainer}
					<Pagination
						limit={limit}
						onChangeDownPage={onChangeDownPage}
						onChangeLimit={onChangeLimit}
						onChangePage={onChangePage}
						onChangeUpPage={onChangeUpPage}
					/>
				</div>
			</div>
		</Page>
	);
};
