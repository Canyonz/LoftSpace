import { MainPage } from "@/pages/mainPage/MainPage";
import { Navbar } from "@/widgets/navbar/ui/navbar/Navbar";
import cls from "classnames";

export const App = () => {
	return (
		<div className={cls("app", "app_light_theme")}>
			<Navbar />
			<MainPage />
		</div>
	);
};
