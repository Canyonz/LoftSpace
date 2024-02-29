import cls from "classnames";
import styles from "./Input.module.sass";
import { useState } from "react";

/**
 *
 * @param {{
 *  type: string,
 *  size: "s" | "m",
 *  placeholder: string,
 * 	value: string,
 *  addonRight: ReactElement,
 *  onChange: () => void,
 *  className: string
 * }} props
 *
 */

export const Input = ({ type = "text", size = "s", placeholder, value, addonRight, onChange, className }) => {
	const [isFocused, setIsFocused] = useState(false);

	const onFocus = () => {
		setIsFocused(true);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	const sizeInput = {
		s: "size_s",
		m: "size_m",
	}[size];

	return (
		<div className={cls(styles.inputWrapper, { [styles.focused]: isFocused }, styles[sizeInput], className)}>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				className={styles.input}
			/>
			<div className={styles.addonRight}>{addonRight}</div>
		</div>
	);
};
