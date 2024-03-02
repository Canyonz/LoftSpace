import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import LeafSVG from "@/shared/assets/icon/leaf.svg";
import ShippingSVG from "@/shared/assets/icon/shipping.svg";
import HandsheakeSVG from "@/shared/assets/icon/handshake.svg";
import styles from "./ArticleServices.module.sass";

const services = [
	{
		img: LeafSVG,
		title: "Экологичная мебель",
		value: "Наша продукция безопасна, благодаря натуральным материалам.",
	},
	{
		img: ShippingSVG,
		title: "Доставка и сборка",
		value: "Работа с опытными и аккуратными сборщиками.",
	},
	{
		img: HandsheakeSVG,
		title: "Консультация по дизайну",
		value: "Помощь дизайнера в создании, нужного вам, интерьера.",
	},
];

export const ArticleServices = () => {
	return (
		<article className={styles.article}>
			<div className={styles.sectionsWrapper}>
				{services.map((service, index) => (
					<section key={index} className={styles.section}>
						<AppIcon Svg={service.img} color="primary" size="l" className={styles.icon} />
						<h3 className={styles.title}>{service.title}</h3>
						<span className={styles.text}>{service.value}</span>
					</section>
				))}
			</div>
		</article>
	);
};
