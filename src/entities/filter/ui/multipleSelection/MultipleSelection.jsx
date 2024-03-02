import { LayoutFilter } from "../layoutFilter/LayoutFilter";
import { CheckBox } from "@/shared/ui/checkbox/CheckBox";
import styles from "./MultipleSelection.module.sass";

export const MultipleSelection = ({ title, items, opened, onChange, className }) => {
	return (
		<LayoutFilter title={title} opened={opened} className={className}>
			<div className={styles.items}>
				{items.map((item) => (
					<CheckBox
						key={item.value}
						label={item.value}
						checked={item.checked}
						onChange={onChange(item.value)}
						className={styles.checkbox}
					/>
				))}
			</div>
		</LayoutFilter>
	);
};
