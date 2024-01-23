import cls from "classnames";
import styles from "./Button.module.sass";

/**
 *
 * @param {{
 *  children: ReactElement,
 *  className: string,
 *  size: 's' | 'm',
 *  variant: 'primary' | 'secondary'
 * }} props
 *
 */

export const Button = ({ size = "m", variant = "primary", children, className }) => {
	const sizeBtn = {
		s: "size_s",
		m: "size_m",
	}[size];

	const additionalClass = [styles[sizeBtn], styles[variant], className];

	return <button className={cls(styles.button, additionalClass)}>{children}</button>;
};
