import cls from "classnames";
import styles from "./Button.module.sass";

/**
 *
 * @param {{
 *  children: ReactElement,
 *  className: string,
 *  size: 's' | 'm' | 'l',
 * 	maxWidth: boolean,
 *  variant: 'primary' | 'secondary',
 * 	isDisabled: boolean,
* 	isBorder: boolean,
 * 	onClick: void
 * }} props
 *
 */

export const Button = ({
	size = "l",
	variant = "primary",
	maxWidth,
	isDisabled,
	isBorder,
	onClick,
	children,
	className,
	...otherProps
}) => {
	const sizeBtn = {
		s: "size_s",
		m: "size_m",
		l: "size_l",
	}[size];

	const mods = { [styles.maxWidth]: maxWidth, [styles.disabled]: isDisabled, [styles.isBorder]: isBorder };
	const additionalClass = [styles[sizeBtn], styles[variant], className];

	return (
		<button onClick={onClick} disabled={isDisabled} className={cls(styles.button, mods, additionalClass)} {...otherProps}>
			{children}
		</button>
	);
};
