import { useCallback, useEffect, useState } from "react";

export const usePrice = (refPrice, price, changePrice) => {
	const [widthPrice, setWidthPrice] = useState(0);

	const [isDragLeft, setIsDragLeft] = useState(false);
	const [startPosleft, setStartPosleft] = useState(0);
	const [currentPosleft, setCurrentPosLeft] = useState(0);
	const [lastPosleft, setLastPosleft] = useState(0);

	const [isDragRight, setIsDragRight] = useState(false);
	const [startPosRight, setStartPosRight] = useState(0);
	const [currentPosRight, setCurrentPosRight] = useState(0);
	const [lastPosRight, setLastPosRight] = useState(0);

	const [maxPrice, setMaxPrice] = useState("");
	const [minPrice, setMinPrice] = useState("");

	// const maxPriceFromData = products.reduce((acc, cur) => Math.max(acc, cur.price), 999999);
	// const minPriceFromData = products.reduce((acc, cur) => Math.min(acc, cur.price), 0);

	const maxPriceFromData = 550000;
	const minPriceFromData = 0;

	const maxPriceFormatedPlaceholder = new Intl.NumberFormat("ru-RU").format(maxPriceFromData);
	const minPriceFormatedPlaceholder = new Intl.NumberFormat("ru-RU").format(minPriceFromData);

	const calcPrice = useCallback(
		(movePos) => {
			const price = (((maxPriceFromData - minPriceFromData) * movePos) / widthPrice + minPriceFromData).toFixed(0);
			return price;
		},
		[maxPriceFromData, minPriceFromData, widthPrice]
	);

	const onMouseMoveLeft = useCallback(
		(e) => {
			const movePos = e.clientX - startPosleft + lastPosleft;

			if (movePos < 0) return setCurrentPosLeft(0);
			if (movePos > currentPosRight) return setCurrentPosLeft(currentPosRight);

			setMinPrice(calcPrice(movePos));
			setCurrentPosLeft(movePos);
		},
		[calcPrice, currentPosRight, lastPosleft, startPosleft]
	);

	const onMouseDownLeft = (e) => {
		setStartPosleft(e.clientX);
		setIsDragLeft(true);
	};

	const onMouseUpLeft = useCallback(() => {
		setMaxPrice((prev) => prev || maxPriceFormatedPlaceholder);
		setMinPrice((prev) => prev || minPriceFormatedPlaceholder);
		setLastPosleft(currentPosleft);
		setIsDragLeft(false);
	}, [currentPosleft, maxPriceFormatedPlaceholder, minPriceFormatedPlaceholder]);

	const onMouseMoveRight = useCallback(
		(e) => {
			const movePos = e.clientX - startPosRight + lastPosRight;

			if (movePos > widthPrice) return setCurrentPosRight(widthPrice);
			if (movePos < currentPosleft) return setCurrentPosRight(currentPosleft);

			setMaxPrice(calcPrice(movePos));
			setCurrentPosRight(movePos);
		},
		[calcPrice, currentPosleft, lastPosRight, startPosRight, widthPrice]
	);

	const onMouseDownRight = (e) => {
		setStartPosRight(e.clientX);
		setIsDragRight(true);
	};

	const onMouseUpRight = useCallback(() => {
		setMaxPrice((prev) => prev || maxPriceFormatedPlaceholder);
		setMinPrice((prev) => prev || minPriceFormatedPlaceholder);
		setLastPosRight(currentPosRight);
		setIsDragRight(false);
	}, [currentPosRight, maxPriceFormatedPlaceholder, minPriceFormatedPlaceholder]);

	useEffect(() => {
		if (isDragLeft) {
			window.addEventListener("mousemove", onMouseMoveLeft);
			window.addEventListener("mouseup", onMouseUpLeft);
		}

		if (isDragRight) {
			window.addEventListener("mousemove", onMouseMoveRight);
			window.addEventListener("mouseup", onMouseUpRight);
		}

		return () => {
			window.removeEventListener("mousemove", onMouseMoveLeft);
			window.removeEventListener("mouseup", onMouseUpLeft);
			window.removeEventListener("mousemove", onMouseMoveRight);
			window.removeEventListener("mouseup", onMouseUpRight);
		};
	}, [isDragLeft, isDragRight, onMouseMoveLeft, onMouseMoveRight, onMouseUpLeft, onMouseUpRight]);

	useEffect(() => {
		setWidthPrice(refPrice.current.clientWidth - 20);
		setCurrentPosRight(refPrice.current.clientWidth - 20);
		setLastPosRight(refPrice.current.clientWidth - 20);
	}, [refPrice]);

	// const onChangeMinPrice = (e) => {
	// 	if (e.target.value === "") {
	// 		setMinPrice(minPriceFromData);
	// 		setCurrentPosLeft(0);
	// 		return;
	// 	}

	// 	const movePos = ((Number(e.target.value) - minPriceFromData) * widthPrice + minPriceFromData) / maxPriceFromData;

	// 	setMinPrice(e.value);
	// 	setCurrentPosLeft(movePos);
	// };

	// const onChangeMaxPrice = (e) => {
	// 	if (e.target.value === "") {
	// 		setMaxPrice(maxPriceFromData);
	// 		setCurrentPosRight(widthPrice);
	// 		return;
	// 	}

	// 	const movePos = ((Number(e.target.value) - minPriceFromData) * widthPrice + minPriceFromData) / maxPriceFromData;
	// 	setMaxPrice(e.value);
	// 	setCurrentPosRight(movePos);
	// };

	// const minPriceFormated = new Intl.NumberFormat("ru-RU").format(minPrice);
	// const maxPriceFormated = new Intl.NumberFormat("ru-RU").format(maxPrice);
	return {
		minPriceFormatedPlaceholder,
		minPrice,
		maxPriceFormatedPlaceholder,
		maxPrice,
		currentPosleft,
		currentPosRight,
		onMouseDownLeft,
		onMouseDownRight,
	};
};
