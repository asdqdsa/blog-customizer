import { ArrowButton } from "components/arrow-button";
import { Button } from "components/button";
import styles from "./ArticleParamsForm.module.scss";
import clsx from "clsx";
import { useState, useRef } from "react";
import { Select } from "../select";
import { RadioGroup } from "../radio-group";
import { Separator } from "../separator";
import type { OnClick } from "../arrow-button/ArrowButton";
import {
	type ArticleStateType,
	type OptionType,
	defaultArticleState,
	fontFamilyOptions,
	fontColors,
	fontSizeOptions,
	contentWidthArr,
	backgroundColors,
} from "src/constants/articleProps";
import { useOutsideClickClose } from "../select/hooks/useOutsideClickClose";

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	setArticleState: (args: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { articleState, setArticleState } = props;
	const rootRef = useRef(null);
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

	const [allArticleStates, setAllArticleStates] =
		useState<ArticleStateType>(articleState);

	const handleChange = (
		formInputField: keyof ArticleStateType,
		value: OptionType,
	) => {
		setAllArticleStates({ ...allArticleStates, [formInputField]: value });
	};

	const handleMenuState: OnClick = () => setIsOpenMenu(!isOpenMenu);

	useOutsideClickClose({
		isOpen: isOpenMenu,
		rootRef,
		onClose: () => setIsOpenMenu(!isOpenMenu),
		onChange: setIsOpenMenu,
	});

	return (
		<div ref={rootRef}>
			<ArrowButton menuState={isOpenMenu} onClick={handleMenuState} />
			<aside
				className={
					isOpenMenu
						? clsx(styles.container, styles.container_open)
						: clsx(styles.container)
				}
			>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setArticleState(allArticleStates);
					}}
					onReset={(e) => {
						e.preventDefault();
						setArticleState(defaultArticleState);
						setAllArticleStates(defaultArticleState);
					}}
					className={styles.form}
					title="Задайте Параметры"
					name="Form Article"
				>
					<div>
						<h2 className={clsx(styles.title)}>ЗАДАЙТЕ ПАРАМЕТРЫ</h2>
					</div>

					<Select
						selected={allArticleStates.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) => handleChange("fontFamilyOption", option)}
						title="ШРИФТ"
					/>

					<RadioGroup
						selected={allArticleStates.fontSizeOption}
						options={fontSizeOptions}
						onChange={(option) => handleChange("fontSizeOption", option)}
						title="РАЗМЕР ШРИФТА"
						name={"Font Size"}
					/>

					<Select
						selected={allArticleStates.fontColor}
						options={fontColors}
						onChange={(option) => handleChange("fontColor", option)}
						title="ЦВЕТ ШРИФТА"
					/>

					<Separator />

					<Select
						selected={allArticleStates.backgroundColor}
						options={backgroundColors}
						onChange={(option) => handleChange("backgroundColor", option)}
						title="ЦВЕТ ФОНА"
					/>

					<Select
						selected={allArticleStates.contentWidth}
						options={contentWidthArr}
						onChange={(option) => handleChange("contentWidth", option)}
						title="ШИРИНА КОНТЕНТА"
					/>

					<div className={styles.bottomContainer}>
						<Button title="Сбросить" type="reset" />
						<Button title="Применить" type="submit" />
					</div>
				</form>
			</aside>
		</div>
	);
};
