import { AppImage } from "@/shared/ui/appImage/AppImage";
import styles from "./ArcticleFiller.module.sass";

const listItems = [
	"Наша мебель является безопасной для здоровья, блягодяря использованию гипоаллергенных и гигиеничных материалов.",
	"Обладает высокой эластичностью и средним, наиболее комфортным, показателем мягкости.",
];

export const ArcticleFiller = () => {
	return (
		<article className={styles.article}>
			<AppImage src="./main/anatomy.png" maxHeight />
			<div className={styles.contentWrapper}>
				<div className={styles.content}>
					<h2 className={styles.title}>Анатомический наполнитель из экологичных материалов</h2>
					<ul className={styles.list}>
						{listItems.map((item, index) => (
							<li key={index} className={styles.item}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	);
};
