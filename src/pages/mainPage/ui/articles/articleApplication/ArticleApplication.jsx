import { ApplicationForm } from "@/features/applicationForm";
import styles from "./ArticleApplication.module.sass";

const listItems = [
	"Заполните форму и наш дизайнер с вами свяжется",
	"Обсудите детали по телефону или пригласите специалиста на дом, для более удобной планировки интерьера и замеров",
	"Получите профессиональную консультацию и дизайн-проект для вашего пространства",
];

export const ArticleApplication = () => {
	return (
		<article className={styles.article}>
			<div className={styles.contentWrapper}>
				<div className={styles.content}>
					<h2 className={styles.title}>Создайте свой интерьер с Loft Space</h2>
					<span className={styles.text}>
						Мы помогаем нашим покупателям в выборе стильной и современной мебели, которая подчеркивает интерьер квартиры/дома, а
						не оттеняет его. Наши специалисты предложат подходящее и грамотное дизайнерское решение вашего пространства.
					</span>
					<ul className={styles.list}>
						{listItems.map((item, index) => (
							<li key={index} className={styles.item}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<ApplicationForm />
			</div>
		</article>
	);
};
