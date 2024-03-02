import { AppLogo } from "@/shared/ui/appLogo/AppLogo";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import { useStylesNavbar } from "@/shared/lib/hooks/useStylesNavbar";
import { getRouteAbout, getRouteCatalog, getRouteMain } from "@/shared/const/router";
import cls from "classnames";
import styles from "./Navbar.module.sass";

const navItem = [
	{
		text: "Главная",
		path: getRouteMain(),
	},
	{
		text: "Каталог",
		path: getRouteCatalog(),
	},
	{
		text: "О нас",
		path: getRouteAbout(),
	},
];

export const Navbar = () => {
	const { variant } = useStylesNavbar();

	return (
		<header className={cls(styles.header, styles[variant])}>
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
