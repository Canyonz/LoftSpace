import styles from "./CheckBox.module.sass";
import cls from "classnames";

/**
 *
 * @param{{
 * 	checked: boolean,
 * 	label: string,
 * 	onChange: () => void,
 * 	className: string
 * }}
 *
 */

export const CheckBox = ({ checked, label, onChange, className }) => {
	return (
		<label className={cls(styles.label, className)}>
			<input type="checkbox" checked={checked} onChange={onChange} className={styles.checkbox} />
			<span>{label}</span>
		</label>
	);
};
