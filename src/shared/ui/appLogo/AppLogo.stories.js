import { AppLogo } from "./AppLogo";

export default {
	title: "shared/AppLogo",
	component: AppLogo,
	tags: ["autodocs"],
};

export const LogoPrimary = {
	args: {
		height: 54,
		width: 250,
	},
};
export const LogoSecondary = {
	args: {
		color: "neutral",
	},
};
