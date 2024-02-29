import { useRef } from "react";
import { LayoutFilter } from "../layoutFilter/LayoutFilter";
import { usePrice } from "../../lib/hooks/usePrice";
import styles from "./Price.module.sass";

//Очень интересно что здесь происходит, но ничего не понятно... Надо рефакторить

export const Price = ({
	title,
	opened,
	minPrice,
	maxPrice,
	minPriceFromData,
	maxPriceFromData,
	handleChangeMinPrice,
	handleChangeMaxPrice,
	className,
}) => {
	const refPrice = useRef(0);
	const widthPrice = (refPrice.current?.clientWidth ?? 250) - 20;

	const {
		onMouseDownLeft,
		onMouseDownRight,
		setLastPosLeft,
		setLastPosRight,
		currentPosLeft,
		setCurrentPosLeft,
		currentPosRight,
		setCurrentPosRight,
	} = usePrice(widthPrice, minPriceFromData, maxPriceFromData, handleChangeMinPrice, handleChangeMaxPrice);

	const formated = (value) => {
		return new Intl.NumberFormat("ru-RU").format(value);
	};

	const onChangeMinPrice = (e) => {
		let maxPriceValue = maxPrice.replace(/\s/g, "");
		let value = Number(e.target.value.replace(/\s/g, ""));

		if (maxPriceValue === "") {
			maxPriceValue = maxPriceFromData;
			handleChangeMaxPrice(formated(maxPriceValue));
		}

		maxPriceValue = Number(maxPriceValue);

		if (value < minPriceFromData) value = minPriceFromData;

		if (value > maxPriceValue) value = maxPriceValue;

		const movePos = ((value - minPriceFromData) * widthPrice + minPriceFromData) / maxPriceFromData;

		const minPriceFormated = formated(value);

		handleChangeMinPrice(minPriceFormated);
		setCurrentPosLeft(movePos);
		setLastPosLeft(movePos);
	};

	const onChangeMaxPrice = (e) => {
		let minPriceValue = minPrice.replace(/\s/g, "");
		let value = Number(e.target.value.replace(/\s/g, ""));

		if (minPriceValue === "") {
			minPriceValue = minPriceFromData;
			handleChangeMinPrice(formated(minPriceValue));
		}

		minPriceValue = Number(minPriceValue);

		if (value > maxPriceFromData) value = maxPriceFromData;

		if (value < minPriceValue) value = minPriceValue;

		const movePos = ((value - minPriceFromData) * widthPrice + minPriceFromData) / maxPriceFromData;

		const maxPriceFormated = formated(value);

		handleChangeMaxPrice(maxPriceFormated);
		setCurrentPosRight(movePos);
		setLastPosRight(movePos);
	};

	const minPriceFormatedPlaceholder = formated(minPriceFromData);
	const maxPriceFormatedPlaceholder = formated(maxPriceFromData);

	return (
		<LayoutFilter title={title} opened={opened} className={className}>
			<div className={styles.number}>
				<input type="text" placeholder={minPriceFormatedPlaceholder} value={minPrice} onChange={onChangeMinPrice} />
				<input type="text" placeholder={maxPriceFormatedPlaceholder} value={maxPrice} onChange={onChangeMaxPrice} />
			</div>
			<div className={styles.priceBetween} ref={refPrice}>
				<div className={styles.circle} onMouseDown={onMouseDownLeft} style={{ left: currentPosLeft }}></div>

				<div className={styles.circle} onMouseDown={onMouseDownRight} style={{ left: currentPosRight }}></div>
			</div>
		</LayoutFilter>
	);
};
