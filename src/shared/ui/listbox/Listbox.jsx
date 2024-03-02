import { useEffect, useRef, useState } from "react";
import { AppIcon } from "../appIcon/AppIcon";
import cls from "classnames";
import styles from "./Listbox.module.sass";
import ArrowSVG from "../../assets/icon/arrow.svg";

export const Listbox = ({ items, className, value, onClick }) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef();

	const onOpen = () => {
		setIsOpen((prev) => !prev);
	};

	const onSelect = (value) => () => {
		onClick(value);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.composedPath().includes(ref.current)) {
				setIsOpen(false);
			}
		};

		document.body.addEventListener("click", handleClickOutside);

		return () => {
			document.body.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div ref={ref} className={cls(styles.listbox, { [styles.isOpen]: isOpen }, className)}>
			<button onClick={onOpen} className={styles.trigger}>
				<span className={styles.title}>{value.content ?? items[0].content}</span>
				<AppIcon Svg={ArrowSVG} color="secondary" className={styles.icon} />
			</button>

			{isOpen && (
				<div className={styles.items}>
					{items.map((item) => (
						<button key={item.id} className={styles.item} onClick={onSelect(item)}>
							{item.content}
						</button>
					))}
				</div>
			)}
		</div>
	);
};
