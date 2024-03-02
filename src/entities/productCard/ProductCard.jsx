import cls from "classnames";
import styles from "./ProductCard.module.sass";
import { AppImage } from "@/shared/ui/appImage/AppImage";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import { getRouteCatalogId } from "@/shared/const/router";

/**
 *
 * @param {{
 *  isPopular: boolean,
 * 	item: Object
 * }} props
 *
 */

export const ProductCard = ({ isPopular = false, item, className }) => {
	const img = isPopular ? item.img_popular : item.img;

	const priceFormated = new Intl.NumberFormat("ru-RU").format(item.price);

	return (
		<AppLink href={getRouteCatalogId(item.id)}>
			<div className={cls(styles.productCard, { [styles.popular]: isPopular }, className)}>
				<AppImage src={img} />
				<div className={styles.content}>
					{!isPopular && <span className={styles.signature}>{item.in_stock ? "В наличии" : "Нет в наличии"}</span>}
					<span className={styles.title}>{item.name}</span>
					<span className={styles.price}>{priceFormated} руб</span>
				</div>
			</div>
		</AppLink>
	);
};
