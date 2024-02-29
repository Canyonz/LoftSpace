import cls from "classnames";
import styles from "./ProductCard.module.sass";
import { AppImage } from "@/shared/ui/appImage/AppImage";

export const ProductCard = ({ item, className }) => {
	const priceFormated = new Intl.NumberFormat("ru-RU").format(item.price);

	return (
		<div className={cls(styles.productCard, className)}>
			<AppImage src={item.img} />
			<div className={styles.content}>
				<span className={styles.signature}>{item.in_stock ? "В наличии" : "Нет в наличии"}</span>
				<span className={styles.title}>{item.name}</span>
				<span className={styles.price}>{priceFormated} руб</span>
			</div>
		</div>
	);
};
