import { Page } from "@/widgets/page/Page";
import {
	ArticleAbout,
	ArticleHeader,
	ArticleServices,
	ArcticleCollections,
	ArcticlePopularProduct,
	ArcticleFiller,
	ArticleApplication,
	ArticleSliders,
} from "./articles/index";
import styles from "./MainPage.module.sass";

export const MainPage = () => {
	return (
		<Page className={styles.mainPage}>
			<ArticleHeader />
			<ArticleAbout />
			<ArticleServices />
			<ArcticleCollections />
			<ArcticlePopularProduct />
			<ArcticleFiller />
			<ArticleApplication />
			<ArticleSliders />
		</Page>
	);
};
