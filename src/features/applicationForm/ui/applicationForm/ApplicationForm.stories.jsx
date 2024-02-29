import { ApplicationForm } from "./ApplicationForm";

export default {
	title: "widget/Application Form",
	component: ApplicationForm,
	decorators: [(Story) => <div style={{ width: 500 }}>{<Story />}</div>],
	tags: ["autodocs"],
};

export const ApplicationFormLight = {
	args: {},
};
