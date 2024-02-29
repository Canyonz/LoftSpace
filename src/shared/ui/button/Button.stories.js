import { Button } from "./Button";

export default {
	title: "shared/Button",
	component: Button,
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
