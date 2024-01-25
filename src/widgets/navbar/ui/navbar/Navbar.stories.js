import { Navbar } from "./Navbar";
import "@/app/styles/index.sass";

export default {
	title: "widget/Navbar",
	component: Navbar,
	args: {
		className: "app_light_theme",
	},
	tags: ["autodocs"],
};

export const NavbarPrimary = {
	args: {},
};

export const NavbarSecondary = {
	args: {
		variant:'secondary'
	},
};
