import { useCallback, useEffect, useState } from "react";

export const usePriceHelper = ({
	widthPrice,
	minPriceFromData,
	maxPriceFromData,
	changePrice,
	currentPos,
	setCurrentPos,
	currentPosOther,
	changePriceOther,
	maxCircle = false,
}) => {
	const [isDrag, setisDrag] = useState(false);
	const [startPos, setStartPos] = useState(0);
	const [lastPos, setLastPos] = useState(0);

	const formated = (value) => {
		return new Intl.NumberFormat("ru-RU").format(value);
	};

	const calcPrice = useCallback(
		(movePos) => {
			const price = (((maxPriceFromData - minPriceFromData) * movePos) / widthPrice + minPriceFromData).toFixed(0);
			return formated(price);
		},
		[maxPriceFromData, minPriceFromData, widthPrice]
	);

	const onMouseMove = useCallback(
		(e) => {
			const movePos = e.clientX - startPos + lastPos;

			if (maxCircle) {
				if (movePos > widthPrice) return setCurrentPos(widthPrice);
				if (movePos < currentPosOther) return setCurrentPos(currentPosOther);
			} else {
				if (movePos < 0) return setCurrentPos(0);
				if (movePos > currentPosOther) return setCurrentPos(currentPosOther);
			}

			changePrice(calcPrice(movePos));
			setCurrentPos(movePos);
		},
		[calcPrice, changePrice, currentPosOther, lastPos, maxCircle, setCurrentPos, startPos, widthPrice]
	);

	const onMouseDown = (e) => {
		if (maxCircle) {
			changePriceOther((prev) => prev || formated(minPriceFromData));
		} else {
			changePriceOther((prev) => prev || formated(maxPriceFromData));
		}

		setStartPos(e.clientX);
		setisDrag(true);
	};

	const onMouseUp = useCallback(() => {
		setLastPos(currentPos);
		setisDrag(false);
	}, [currentPos]);

	useEffect(() => {
		if (isDrag) {
			window.addEventListener("mousemove", onMouseMove);
			window.addEventListener("mouseup", onMouseUp);
		}

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
		};
	}, [isDrag, onMouseMove, onMouseUp]);

	useEffect(() => {
		if (maxCircle) {
			setCurrentPos(widthPrice);
			setLastPos(widthPrice);
		}
	}, [maxCircle, setCurrentPos, setLastPos, widthPrice]);

	return {
		onMouseDown,
		setLastPos,
	};
};

export const usePrice = (widthPrice = 250, minPriceFromData, maxPriceFromData, changeMinPrice, changeMaxPrice) => {
	const [currentPosLeft, setCurrentPosLeft] = useState(0);
	const [currentPosRight, setCurrentPosRight] = useState(0);

	const { onMouseDown: onMouseDownLeft, setLastPos: setLastPosLeft } = usePriceHelper({
		widthPrice: widthPrice,
		minPriceFromData: minPriceFromData,
		maxPriceFromData: maxPriceFromData,
		changePrice: changeMinPrice,
		currentPos: currentPosLeft,
		setCurrentPos: setCurrentPosLeft,
		currentPosOther: currentPosRight,
		changePriceOther: changeMaxPrice,
	});

	const { onMouseDown: onMouseDownRight, setLastPos: setLastPosRight } = usePriceHelper({
		widthPrice: widthPrice,
		minPriceFromData: minPriceFromData,
		maxPriceFromData: maxPriceFromData,
		changePrice: changeMaxPrice,
		currentPos: currentPosRight,
		setCurrentPos: setCurrentPosRight,
		currentPosOther: currentPosLeft,
		changePriceOther: changeMinPrice,
		maxCircle: true,
	});

	return {
		onMouseDownLeft,
		onMouseDownRight,
		setLastPosLeft,
		setLastPosRight,
		currentPosLeft,
		setCurrentPosLeft,
		currentPosRight,
		setCurrentPosRight,
	};
};
