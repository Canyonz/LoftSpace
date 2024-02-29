import { AppLogo } from "@/shared/ui/appLogo/AppLogo";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import { useStylesNavbar } from "@/shared/lib/hooks/useStylesNavbar";
import cls from "classnames";
import styles from "./Navbar.module.sass";

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
