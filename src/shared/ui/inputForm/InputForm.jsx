import styles from "./InputForm.module.sass";
import cls from "classnames";

/**
 *
 * @param {{
 *  type: 'text' | 'tel' | 'email',
 *  placeholder: string,
 *  value: string,
 * 	required: boolean,
 *  setValue: () => void,
 *  className: string
 * }} props
 *
 */

export const InputForm = ({ type, placeholder, value, required, setValue, className }) => {
	const onChangeTel = (event) => {
		const value = event.target.value.replace("7", "");
		let numberValue = value.replace(/\D/g, "");

		if (numberValue.slice(0, 1) === "8") {
			numberValue = numberValue.slice(-10);
		}

		if (numberValue.length === 0) return setValue("");
		if (numberValue.length > 10) return;

		let formattedValue = "+7 (";

		formattedValue += numberValue.slice(0, 3);

		if (numberValue.length >= 4) {
			formattedValue += ") " + numberValue.slice(3, 6);
		}
		if (numberValue.length >= 7) {
			formattedValue += "-" + numberValue.slice(6, 8);
		}
		if (numberValue.length >= 9) {
			formattedValue += "-" + numberValue.slice(8, 10);
		}

		setValue(formattedValue);
	};

	const onChangeName = (event) => {
		const value = event.target.value;
		const stringValue = value.replace(/[^а-яё]/gi, "");

		if (value.length > 15) return;
		setValue(stringValue);
	};

	const onChangeEmail = (event) => {
		const value = event.target.value;
		const emailValue = value.replace(/[а-яё]/gi, "");

		setValue(emailValue);

		// /^((?!\.)[\w\-_.]+)(@\w+)(\.\w+)$/gm
	};

	// const onKeyDown = (event) => {
	// 	// !/\d/g.
	// 	if (
	// 		/[^a-zA-Zа-яА-яёЁ]/g.test(event.key) &&
	// 		event.keyCode !== 8 &&
	// 		!(event.keyCode === 67 && event.ctrlKey) &&
	// 		!(event.keyCode === 86 && event.ctrlKey) &&
	// 		!(event.keyCode === 65 && event.ctrlKey)
	// 	) {
	// 		event.preventDefault();
	// 	}
	// };

	const onChange = {
		text: onChangeName,
		tel: onChangeTel,
		email: onChangeEmail,
	}[type];

	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			required={required}
			className={cls(styles.input, className)}
		/>
		// <span>{text}</span>
	);
};
