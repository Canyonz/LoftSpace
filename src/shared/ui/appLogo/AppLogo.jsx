import cls from "classnames";
import LogoSVG from "../../assets/icon/logo.svg";
import styles from "./AppLogo.module.sass";

/**
 *
 * @param {{
 * height: number,
 * width: number,
 * color: 'primary' | 'neutral'
 * className: string
 * }} props
 *
 */

export const AppLogo = ({ height = 27, width = 125, color = 'primary', className }) => {
	return <LogoSVG height={height} width={width} className={cls(styles.appLogo, styles[color], className)} />;
};
