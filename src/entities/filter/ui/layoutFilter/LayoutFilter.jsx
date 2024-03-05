import { useState } from "react";
import { Trigger } from "@/entities/filter/ui/trigger/Trigger";
import cls from "classnames";
import styles from "./LayoutFilter.module.sass";

export const LayoutFilter = ({ title, children, opened = false, className }) => {
	const [isOpen, setIsOpen] = useState(opened);

	const onOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className={cls(styles.checkboxWrapper, className)}>
			<Trigger title={title} onOpen={onOpen} isOpen={isOpen} className={styles.trigger}/>

			{isOpen && children}
		</div>
	);
};
