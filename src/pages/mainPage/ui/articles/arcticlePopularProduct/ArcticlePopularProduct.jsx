import { AppLink } from "@/shared/ui/appLink/AppLink";
import styles from "./ArcticlePopularProduct.module.sass";
import { ProductCard } from "@/entities/productCard/ProductCard";
import { useMemo } from "react";
import { useGetCatalog } from "@/shared/lib/hooks/useGetCatalog";
import { getRouteCatalog } from "@/shared/const/router";

const recommendationsCount = 4;

export const ArcticlePopularProduct = () => {
	const filters = useMemo(
		() => ({
			_limit: recommendationsCount,
			_sort: "views",
			_order: "desc",
		}),
		[]
	);

	const { products, isLoading, error } = useGetCatalog(filters);

	return (
		<article className={styles.article}>
			<div className={styles.contentWrapper}>
				<div className={styles.header}>
					<h2 className={styles.headerText}>Популярные товары</h2>
					<AppLink href={getRouteCatalog()} color="primary" isArrow>
						Каталог
					</AppLink>
				</div>
				<div className={styles.productsWrapper}>
					{products.map((product) => (
						<ProductCard key={product.id} isPopular item={product} />
					))}
				</div>
			</div>
		</article>
	);
};
