import cls from "classnames";
import styles from "./AppLink.module.sass";
import ArrowLinkSVG from "../../assets/icon/arrowLink.svg";
import { Link } from "react-router-dom";

/**
 *
 * @param {{
 *  children: ReactElement,
 *  href: string,
 *  variant: 'filled' | 'clear',
 * 	color: 'primary' | 'secondary' | 'neutral',
 * 	size: 's' | 'm',
 *  isArrow: boolean,
 *  className: string
 * }} props
 *
 */

export const AppLink = ({ children, href = "#", variant = "clear", color = "neutral", size = "s", isArrow, className }) => {
	const sizeLink = {
		s: "size_s",
		m: "size_m",
	}[size];

	const additionalClass = [styles[variant], styles[color], styles[sizeLink], className];

	return (
		<Link to={href} className={cls(styles.appLink, { [styles.isArrow]: isArrow }, additionalClass)}>
			{children}
			{isArrow && <ArrowLinkSVG />}
		</Link>
	);
};
