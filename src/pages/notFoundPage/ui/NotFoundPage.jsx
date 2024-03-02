import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "@/widgets/page/Page";
import { getRouteNotFound } from "@/shared/const/router";
import styles from "./NotFoundPage.module.sass";

export const NotFoundPage = () => {
	const navigate = useNavigate();

	useLayoutEffect(() => {
		navigate(getRouteNotFound());
	}, [navigate]);

	return (
		<Page className={styles.notFoundPage}>
			<h1>Страница не найдена</h1>
		</Page>
	);
};
