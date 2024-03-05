import cls from "classnames";
import styles from "./ProductNotFound.module.sass";

export const ProductNotFound = ({ className }) => {
	return (
		<div className={cls(styles.productNotFound, className)}>
			<h2>По вашему запросу товары не найдены</h2>
		</div>
	);
};
