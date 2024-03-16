import { AppLink } from "./AppLink";

export default {
	title: "shared/AppLink",
	component: AppLink,
	tags: ["autodocs"],
};

export const FilledS = {
	args: {
		children: "Ссылка",
		variant: "filled",
		size: "s",
		href: "#",
	},
};

export const FilledM = {
	args: {
		children: "Ссылка",
		variant: "filled",
		size: "m",
	},
};

export const Clear = {
	args: {
		children: "Ссылка",
	},
};

export const ClearPrimaryArrow = {
	args: {
		children: "Ссылка",
		color: "primary",
		isArrow: true,
	},
};

export const ClearNeutralArrow = {
	args: {
		children: "Ссылка",
		color: "neutral",
		isArrow: true,
	},
};
