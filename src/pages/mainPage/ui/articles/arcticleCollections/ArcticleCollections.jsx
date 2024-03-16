import { AppLink } from "@/shared/ui/appLink/AppLink";
import { AppImage } from "@/shared/ui/appImage/AppImage";
import styles from "./ArcticleCollections.module.sass";
import { getRouteCatalog } from "@/shared/const/router";

const collections = [
	{
		link: getRouteCatalog(),
		img: "./main/collection.jpg",
		signature: "Loft Minimal",
	},
	{
		link: getRouteCatalog(),
		img: "./main/collection1.jpg",
		signature: "Loft Grace",
	},
	{
		link: getRouteCatalog(),
		img: "./main/collection2.jpg",
		signature: "Loft Elite",
	},
];

export const ArcticleCollections = () => {
	return (
		<article className={styles.article}>
			<div className={styles.contentWrapper}>
				<div className={styles.header}>
					<h2>Наши коллекции</h2>
					<AppLink href={getRouteCatalog()} isArrow>
						Коллекции
					</AppLink>
				</div>
				<div className={styles.sectionsWrapper}>
					{collections.map((collection, index) => (
						<AppLink key={index} href={collection.link}>
							<AppImage src={collection.img} signature={collection.signature} />
						</AppLink>
					))}
				</div>
			</div>
		</article>
	);
};
