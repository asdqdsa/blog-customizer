import arrow from "src/images/arrow.svg";
import clsx from "clsx";

import styles from "./ArrowButton.module.scss";
import React, { useState } from "react";

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;
type Props = {
	state?: boolean;
	onCLick?: () => void;
};
export const ArrowButton = (props: Props) => {
	// const [isMenuOpen, setisMenuOpen] = useState(false);

	// const handleMenuState: OnClick = () => {
	// 	setisMenuOpen(!isMenuOpen);
	// 	console.log(isMenuOpen);
	// };
	console.log(props);
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={props.onCLick}
			onKeyDown={props.onCLick}
			role="button"
			aria-label="Открыть/Закрыть форму параметров статьи"
			tabIndex={0}
			className={
				props.state
					? clsx(styles.container, styles.container_open)
					: clsx(styles.container)
			}
		>
			<img
				src={arrow}
				alt="иконка стрелочки"
				className={
					props.state
						? clsx(styles.arrow, styles.arrow_open)
						: clsx(styles.arrow)
				}
			/>
		</div>
	);
};
