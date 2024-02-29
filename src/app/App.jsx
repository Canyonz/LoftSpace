import { Navbar } from "@/widgets/navbar/index";
import { AppRouter } from "@/pages";
import { Footer } from "@/widgets/footer";
import cls from "classnames";
import "./styles/index.sass";

export const App = () => {
	return (
		<div id="app" className={cls("app", "app_light_theme")}>
			<Navbar />
			<AppRouter />
			<Footer />
			<div id="notificationPlace" className="notificationPlace"></div>
		</div>
	);
};
