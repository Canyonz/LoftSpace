import { AppImage } from "@/shared/ui/appImage/AppImage";
import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import MapmarkerSVG from "@/shared/assets/icon/map-marker.svg";
import styles from "./ArticleHeader.module.sass";
import { getRouteCatalog } from "@/shared/const/router";

export const ArticleHeader = () => {
	return (
		<article className={styles.article}>
			<AppImage src="./main/header.jpg" className={styles.img} />

			<div className={styles.contentWrapper}>
				<div className={styles.contentSize}>
					<div className={styles.content}>
						<div className={styles.city}>
							<AppIcon Svg={MapmarkerSVG} />
							<span>г. Воронеж</span>
						</div>
						<h1 className={styles.title}>Минимализм с Loft Space</h1>
						<span>
							Философия минимализма заключается в тишине, свободе гармоничного помещения. Когда в пространстве нет ничего лишнего,
							отдыхает не только тело, но и душа.
						</span>
						<span>Наши коллекции в стиле минимализм - беспроигрышное дизайнерское решение.</span>
						<AppLink href={getRouteCatalog()} variant="filled">
							Коллекции
						</AppLink>
					</div>
				</div>
			</div>
		</article>
	);
};
