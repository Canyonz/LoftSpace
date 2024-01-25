import { Button } from "./Button";
import "@/app/styles/index.sass";

export default {
	title: "shared/Button",
	component: Button,
	args: {
		className: "app_light_theme",
	},
	tags: ["autodocs"],
};

export const Primary = {
	args: {
		children: "Кнопка",
	},
};

export const Secondary = {
	args: {
		children: "Кнопка",
		variant: "secondary",
	},
};

export const Small = {
	args: {
		size: "s",
		children: "Кнопка",
	},
};

export const Medium = {
	args: {
		size: "m",
		children: "Кнопка",
	},
};
