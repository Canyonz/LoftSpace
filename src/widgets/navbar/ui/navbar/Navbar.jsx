import { AppLogo } from "@/shared/ui/appLogo/AppLogo";
import styles from "./Navbar.module.sass";
import cls from "classnames";
import { AppLink } from "@/shared/ui/appLink/AppLink";

const navItem = [
	{
		text: "Главная",
		path: "/",
	},
	{
		text: "Каталог",
		path: "/catalog",
	},
	{
		text: "О нас",
		path: "/about",
	},
];

/**
 *
 * @param {{
 *  variant: 'primary' | 'secondary',
 *  className: string
 * }} props
 *
 */

export const Navbar = ({ variant = "primary", className }) => {
	return (
		<header className={cls(styles.header, styles[variant], className)}>
			<div className={cls(styles.navbar)}>
				<AppLogo color={variant === "secondary" ? "neutral" : "primary"} />
				<div className={styles.items}>
					{navItem.map((item) => (
						<AppLink color={variant === "secondary" ? "secondary" : "neutral"} key={item.path} href={item.path}>
							{item.text}
						</AppLink>
					))}
				</div>
			</div>
		</header>
	);
};
