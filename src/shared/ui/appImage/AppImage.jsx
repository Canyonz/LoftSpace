import cls from "classnames";
import styles from "./AppImage.module.sass";
import { useLayoutEffect, useState } from "react";

/**
 *
 * @param {{
 * 	src: string,
 *  alt: string,
 * 	fallback: ReactElement,
 * 	errorFallback: ReactElement,
 * 	className: string
 * }} props
 *
 */

export const AppImage = ({ src, alt = "image", fallback, errorFallback = fallback, className }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useLayoutEffect(() => {
		const img = new Image();

		img.src = src || "";

		img.onload = () => {
			setIsLoading(false);
		};

		img.onerror = () => {
			setIsLoading(false);
			setHasError(true);
		};
	});

	if (isLoading && fallback) {
		return fallback;
	}

	if (hasError && errorFallback) {
		return errorFallback;
	}

	return <img src={src} alt={alt} className={cls(styles.appImage, className)} />;
};
