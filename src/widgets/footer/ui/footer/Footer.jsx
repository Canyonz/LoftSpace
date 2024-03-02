import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import { AppLogo } from "@/shared/ui/appLogo/AppLogo";
import cls from "classnames";
import styles from "./Footer.module.sass";
import VKSVG from "@/shared/assets/icon/vk.svg";
import OKSVG from "@/shared/assets/icon/ok.svg";
import TGSVG from "@/shared/assets/icon/telegram.svg";
import WAPPSVG from "@/shared/assets/icon/whatsapp.svg";
import { ApplicationForm } from "@/features/applicationForm/index";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import { getRouteAbout } from "@/shared/const/router";

const contacts = [
	{
		title: "Воронеж - офис продаж",
		value: "+7 (473) 212-09-98",
		link: "tel:+7 (473) 212-09-98",
	},
	{
		title: "Call - центр",
		value: "+7 (812) 380-09-98",
		link: "tel:+7 (812) 380-09-98",
	},
	{
		title: "Напишите нам",
		value: "info@loft.ru",
		link: "https://info@loft.ru",
	},
];

const info = [
	{
		value: "О магазине",
		link: getRouteAbout(),
	},
	{
		value: "Доставка и оплата",
		link: getRouteAbout(),
	},
	{
		value: "Гарантии",
		link: getRouteAbout(),
	},
	{
		value: "Сотрудничество",
		link: getRouteAbout(),
	},
];

const socials = [
	{
		img: VKSVG,
		link: "https://vk.com/",
	},
	{
		img: WAPPSVG,
		link: "https://www.whatsapp.com/",
	},
	{
		img: TGSVG,
		link: "tg://resolve?domain=canyon51",
	},
	{
		img: OKSVG,
		link: "https://ok.ru/",
	},
];

const WrapperSection = ({ title, children }) => {
	return (
		<section className={cls(styles.section, styles.contacts)}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>{children}</ul>
		</section>
	);
};

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.sectionsWrapper}>
					<WrapperSection title={"Контакты"}>
						{contacts.map((contact, index) => (
							<li key={index}>
								<span className={styles.itemTitle}>{contact.title}</span>
								<AppLink href={contact.link} size="m">
									{contact.value}
								</AppLink>
							</li>
						))}
					</WrapperSection>

					<WrapperSection title={"Информация"}>
						{info.map((inf, index) => (
							<li key={index}>
								<AppLink href={inf.link} size="m">
									{inf.value}
								</AppLink>
							</li>
						))}
					</WrapperSection>

					<section className={cls(styles.section, styles.newsletter)}>
						<ApplicationForm secondary />
					</section>
				</div>

				<div className={styles.footerDown}>
					<AppLogo />
					<ul className={styles.links}>
						{socials.map((social, index) => (
							<li key={index}>
								<AppLink href={social.link}>
									<AppIcon Svg={social.img} size="m" />
								</AppLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};
