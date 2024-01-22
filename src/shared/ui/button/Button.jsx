import classNames from "classnames";
import styles from "./Button.module.sass";
import PropTypes from "prop-types";

/**
 * @param {text} text
 * @param {classNames} className
 */

export const Button = ({ text, className }) => {
	return <button className={classNames(styles.button, className)}>{text}</button>;
};

Button.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
};
