import { AppLogo } from "./AppLogo";
import "@/app/styles/index.sass";

export default {
	title: "shared/AppLogo",
	component: AppLogo,
	args: {
		className: "app_light_theme",
	},
	tags: ["autodocs"],
};

export const LogoPrimary = {
	args: {
		height: 27,
		width: 125,
	},
};
export const LogoSecondary = {
	args: {
		color: "neutral",
		height: 27,
		width: 125,
	},
};
