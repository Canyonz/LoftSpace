import { InputForm } from "./InputForm";

export default {
	title: "shared/InputForm",
	component: InputForm,
	tags: ["autodocs"],
};

export const InputText = {
	args: {
		type: "text",
		placeholder: "Введите имя"
	},
};

export const InputTel = {
	args: {
		type: "tel",
		placeholder: "+7 (___)___-__-__",
	},
};

export const InputEmail = {
	args: {
		type: "email",
		placeholder: "Введите e-mail",
	},
};
