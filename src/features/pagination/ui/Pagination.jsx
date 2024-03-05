import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import { useGetCatalog } from "@/shared/lib/hooks/useGetCatalog";
import { Button } from "@/shared/ui/button/Button";
import styles from "./Pagination.module.sass";
import ArrowLinkSVG from "@/shared/assets/icon/arrowLink.svg";
import { useEffect, useState } from "react";

export const Pagination = ({ limit, onChangeLimit, onChangePage, onChangeDownPage, onChangeUpPage }) => {
	const [countPage, setCountPage] = useState(0);

	const { products } = useGetCatalog();

	useEffect(() => {
		setCountPage(Math.ceil(products.length / limit));
	}, [limit, products.length]);

	return (
		<div className={styles.pagination}>
			<Button variant="secondary" isBorder maxWidth size="s" onClick={onChangeLimit}>
				Показать еще
			</Button>
			<div className={styles.paginationPage}>
				<AppIcon Svg={ArrowLinkSVG} clickable color="secondary" className={styles.btnBackPage} onClick={onChangeDownPage} />
				{[...Array(countPage)].map((_, index) => (
					<button key={index} className={styles.pageNumber} onClick={onChangePage(index + 1)}>
						{index + 1}
					</button>
				))}
				<AppIcon Svg={ArrowLinkSVG} clickable color="secondary" className={styles.btnForwardPage} onClick={onChangeUpPage} />
			</div>
		</div>
	);
};
