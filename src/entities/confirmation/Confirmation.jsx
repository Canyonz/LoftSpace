import { useEffect, useState } from "react";
import { Portal } from "@/shared/ui/portal/Portal";
import cls from "classnames";
import styles from "./Confirmation.module.sass";

/**
 *
 * @param {{
 * 	title: string,
 * 	tel: string,
 * 	email: string,
 * 	onClose: () => void
 * }} props
 *
 */

export const Confirmation = ({ title, tel, email, onClose }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		const mountedTimer = setTimeout(() => {
			setIsMounted(false);
		}, 5000);

		const unmountedTimer = setTimeout(() => {
			onClose();
		}, 6000);

		return () => {
			clearTimeout(mountedTimer);
			clearTimeout(unmountedTimer);
		};
	}, [title, tel, email, onClose]);

	return (
		<Portal element={document.getElementById("notificationPlace")}>
			<div className={cls(styles.confirmation, { [styles.opened]: isMounted })}>
				<h3>{title}</h3>
				<div className={styles.text}>
					{tel && <span>Телефон: {tel}</span>}
					{email && <span>Email: {email}</span>}
				</div>
			</div>
		</Portal>
	);
};
