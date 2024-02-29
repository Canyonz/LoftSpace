import { useState } from "react";
import { AppImage } from "../appImage/AppImage";
import cls from "classnames";
import styles from "./Slider.module.sass";

/**
 *
 * @param {{
 *  items: Array<{}>,
 *  reverse: boolean
 * }} props
 *
 */

export const Slider = ({ items, reverse }) => {
	const [isDrag, setIsDrag] = useState(false);
	const [startPos, setStartPos] = useState(0);
	const [currentPos, setCurrentPos] = useState(0);
	const [lastPos, setLastPos] = useState(0);

	const windowWidth = document.documentElement.clientWidth;
	const rightBorder = windowWidth - ((windowWidth * 60) / 100) * items.length;

	const onMouseMove = (e) => {
		if (!isDrag) return;
		const movePos = e.clientX - startPos + lastPos;

		if (reverse) {
			if (movePos < 0) return setCurrentPos(0);
			if (movePos > -rightBorder) return setCurrentPos(-rightBorder);
		} else {
			if (movePos > 0) return setCurrentPos(0);
			if (movePos < rightBorder) return setCurrentPos(rightBorder);
		}

		setCurrentPos(movePos);
	};

	const onMouseDown = (e) => {
		setStartPos(e.clientX);
		setIsDrag(true);
	};

	const onMouseUp = () => {
		setLastPos(currentPos);
		setIsDrag(false);
	};

	return (
		<div className={styles.sliderWrapper}>
			<div
				className={cls(styles.slider, { [styles.reverse]: reverse })}
				style={{ transform: `translateX(${currentPos}px)` }}
				onMouseMove={onMouseMove}
				onMouseDown={onMouseDown}
				onMouseUp={onMouseUp}
				onMouseLeave={onMouseUp}
			>
				{items.map((item) => (
					<AppImage key={item.id} src={item.src} signature={item.signature} className={styles.img} />
				))}
			</div>
		</div>
	);
};
