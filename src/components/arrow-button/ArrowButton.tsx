import arrow from "src/images/arrow.svg";
import clsx from "clsx";
import styles from "./ArrowButton.module.scss";

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export type ArrowButtonProps = {
	menuState: boolean;
	onClick: OnClick;
};

export const ArrowButton = (props: ArrowButtonProps) => {
	const { menuState, onClick } = props;
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={onClick}
			onKeyDown={onClick}
			role="button"
			aria-label="Открыть/Закрыть форму параметров статьи"
			tabIndex={0}
			className={
				menuState
					? clsx(styles.container, styles.container_open)
					: clsx(styles.container)
			}
		>
			<img
				src={arrow}
				alt="иконка стрелочки"
				className={
					menuState ? clsx(styles.arrow, styles.arrow_open) : clsx(styles.arrow)
				}
			/>
		</div>
	);
};
