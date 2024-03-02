import { AppLink } from "@/shared/ui/appLink/AppLink";
import styles from "./ArticleAbout.module.sass";
import { getRouteAbout } from "@/shared/const/router";

export const ArticleAbout = () => {
	return (
		<article className={styles.article}>
			<div className={styles.contentWrapper}>
				<div className={styles.content}>
					<span className={styles.text}>
						Компания Loft Space следит за качеством и делает акцент на уникальности, при этом сохраняя традиции. Основной уклон в
						работе — минимализм и умные решения с целью экономии пространства.
					</span>
					<AppLink variant="filled" href={getRouteAbout()} color="neutral">
						О нас
					</AppLink>
				</div>
			</div>
		</article>
	);
};
