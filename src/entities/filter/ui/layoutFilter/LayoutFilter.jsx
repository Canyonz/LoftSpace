import { useState } from "react";
import { FilterTrigger } from "@/shared/ui/filterTrigger/FilterTrigger";
import cls from "classnames";
import styles from "./LayoutFilter.module.sass";

export const LayoutFilter = ({ title, children, opened = false, className }) => {
	const [isOpen, setIsOpen] = useState(opened);

	const onOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className={cls(styles.checkboxWrapper, className)}>
			<FilterTrigger title={title} onOpen={onOpen} isOpen={isOpen} className={styles.trigger}/>

			{isOpen && children}
		</div>
	);
};
