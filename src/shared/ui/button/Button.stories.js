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
		children: "Text",
	},
};

export const Secondary = {
	args: {
		children: "Text",
		variant: "secondary",
	},
};

export const Small = {
	args: {
		size: "s",
		children: "Text",
	},
};

export const Medium = {
	args: {
		size: "m",
		children: "Text",
	},
};
