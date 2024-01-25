import styles from "./AppIcon.module.sass";
import cls from "classnames";

/**
 *
 * @param {{
 *  Svg: string,
 *  size: '18' | '24' | '44',
 * 	color: 'primary'| 'secondary' | 'neutral',
 *  clickable: boolean,
 *  onClick: void,
 *  className: string
 * }} props
 *
 */

export const AppIcon = ({ Svg, size = "18", color = "neutral", clickable, onClick, className }) => {
	const additionalClass = [styles.appIcon, styles[color], className];
	const svgClass = clickable ?? additionalClass;

	const icon = <Svg height={size} width={size} className={cls(svgClass)} />;

	if (clickable) {
		return (
			<button height={size} width={size} className={cls(additionalClass, { [styles.clickable]: clickable })} onClick={onClick}>
				{icon}
			</button>
		);
	}

	return icon;
};
