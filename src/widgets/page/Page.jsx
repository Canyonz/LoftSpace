import { useEffect } from "react";
import cls from "classnames";
import styles from "./Page.module.sass";

export const Page = ({ children, className }) => {
	useEffect(() => {
		window.scroll({ top: 0 });
	}, []);

	return <main className={cls(styles.main, className)}>{children}</main>;
};
