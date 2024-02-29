import { createPortal } from "react-dom";

/**
 *
 * @param {{
 *  children: ReactNode,
 *  element: HTMLElement
 * }} props
 *
 */

export const Portal = ({ children, element }) => {
	return createPortal(children, element);
};
