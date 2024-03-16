import { Button } from "./Button";

export default {
	title: "shared/Button",
	component: Button,
	args: {
		children: "Кнопка",
	},
	tags: ["autodocs"],
};

export const Primary = {
	args: {
		maxWidth: true,
		isDisabled: true,
	},
};

export const Secondary = {
	args: {
		variant: "secondary",
		isBorder: true,
	},
};

export const Small = {
	args: {
		size: "s",
	},
};

export const Medium = {
	args: {
		size: "m",
	},
};

export const Large = {
	args: {
		size: "l",
	},
};
