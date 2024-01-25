import { AppImage } from "@/shared/ui/appImage/AppImage";
import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import MapmarkerSVG from "@/shared/assets/icon/map-marker.svg";
import styles from "./MainPage.module.sass";

export const MainPage = () => {
	return (
		<main className={styles.mainPage}>
			<article className={styles.article1}>
				<AppImage src="/main/header.jpg" className={styles.img} />

				<div className={styles.wrapperSection}>
					<div className={styles.posSection}>
						<section className={styles.section}>
							<div className={styles.section_city}>
								<AppIcon Svg={MapmarkerSVG} />
								<span>г. Воронеж</span>
							</div>
							<h1 className={styles.title}>Минимализм с Loft Space</h1>
							<span>
								Философия минимализма заключается в тишине, свободе гармоничного помещения. Когда в пространстве нет ничего
								лишнего, отдыхает не только тело, но и душа.
							</span>
							<span>Наши коллекции в стиле минимализм - беспроигрышное дизайнерское решение.</span>
							<AppLink size="m" variant="filled">
								Коллекции
							</AppLink>
						</section>
					</div>
				</div>
			</article>
		</main>
	);
};
