import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import ArrowSVG from "@/shared/assets/icon/arrow.svg";
import cls from "classnames";
import styles from "./Trigger.module.sass";

export const Trigger = ({ title, isOpen, onOpen, className }) => {
	return (
		<button onClick={onOpen} className={cls(styles.trigger, { [styles.isOpen]: isOpen }, className)}>
			<h3 className={styles.title}>{title}</h3>
			<AppIcon Svg={ArrowSVG} color="secondary" className={styles.icon} />
		</button>
	);
};
