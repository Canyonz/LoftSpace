import { AppIcon } from "../appIcon/AppIcon";
import ArrowSVG from "../../assets/icon/arrow.svg";
import cls from "classnames";
import styles from "./FilterTrigger.module.sass";

export const FilterTrigger = ({ title, isOpen, onOpen, className }) => {
	return (
		<button onClick={onOpen} className={cls(styles.trigger, { [styles.isOpen]: isOpen }, className)}>
			<h3 className={styles.title}>{title}</h3>
			<AppIcon Svg={ArrowSVG} color="secondary" className={styles.icon} />
		</button>
	);
};
