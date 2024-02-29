import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import { AppLogo } from "@/shared/ui/appLogo/AppLogo";
import cls from "classnames";
import styles from "./Footer.module.sass";
import VKSVG from "@/shared/assets/icon/vk.svg";
import OKSVG from "@/shared/assets/icon/ok.svg";
import TGSVG from "@/shared/assets/icon/telegram.svg";
import WAPPSVG from "@/shared/assets/icon/whatsapp.svg";
import { ApplicationForm } from "@/features/applicationForm/index";

export const Footer = () => {
	const onClickLinks = (e) => {
		e.preventDefault();
	};
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.sectionsWrapper}>
					<section className={cls(styles.section, styles.contacts)}>
						<h3 className={styles.title}>Контакты</h3>
						<ul className={styles.list}>
							<li>
								<span className={styles.itemTitle}>Воронеж - офис продаж</span>
								<span>+7 (473)212-09-98</span>
							</li>
							<li>
								<span className={styles.itemTitle}>Call - центр</span>
								<span>+7 (812)380-09-98</span>
							</li>
							<li>
								<span className={styles.itemTitle}>Напишите нам</span>
								<span>info@loft.ru</span>
							</li>
						</ul>
					</section>
					<section className={cls(styles.section, styles.info)}>
						<h3 className={styles.title}>Информация</h3>
						<ul className={styles.list}>
							<li>О магазине</li>
							<li>Доставка и оплата</li>
							<li>Гарантии</li>
							<li>Сотрудничество</li>
						</ul>
					</section>
					<section className={cls(styles.section, styles.newsletter)}>
						<ApplicationForm secondary />
					</section>
				</div>
				<div className={styles.footerDown}>
					<AppLogo />
					<div className={styles.links}>
						<AppIcon Svg={VKSVG} size="m" clickable onClick={onClickLinks} />
						<AppIcon Svg={WAPPSVG} size="m" clickable onClick={onClickLinks} />
						<AppIcon Svg={TGSVG} size="m" clickable onClick={onClickLinks} />
						<AppIcon Svg={OKSVG} size="m" clickable onClick={onClickLinks} />
					</div>
				</div>
			</div>
		</footer>
	);
};
