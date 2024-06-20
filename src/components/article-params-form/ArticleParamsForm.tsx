import { ArrowButton } from "components/arrow-button";
import { Button } from "components/button";
import styles from "./ArticleParamsForm.module.scss";
import clsx from "clsx";
import { type SyntheticEvent, useState, useRef } from "react";
import { Select } from "../select";
import { RadioGroup } from "../radio-group";
import { Separator } from "../separator";
import type { OnClick } from "../arrow-button/ArrowButton";
import {
	type ArticleStateType,
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
	const rootRef = useRef(null);
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const [fontFamily, setFontFamily] = useState(
		defaultArticleState.fontFamilyOption,
	);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [fontSize, setFontSize] = useState(defaultArticleState.fontSizeOption);
	const [backgroundColor, setBackgroundColor] = useState(
		defaultArticleState.backgroundColor,
	);
	const [contentWidth, setContentWidth] = useState(
		defaultArticleState.contentWidth,
	);

	const handleMenuState: OnClick = () => setIsOpenMenu(!isOpenMenu);

	const handleFormSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		props.setArticleState({
			...props.articleState,
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			fontSizeOption: fontSize,
			contentWidth: contentWidth,
			backgroundColor: backgroundColor,
		});
	};

	const handleFormReset = (e: SyntheticEvent) => {
		e.preventDefault();
		props.setArticleState({
			...props.articleState,
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontColor: defaultArticleState.fontColor,
			fontSizeOption: defaultArticleState.fontSizeOption,
			contentWidth: defaultArticleState.contentWidth,
			backgroundColor: defaultArticleState.backgroundColor,
		});

		setFontFamily(defaultArticleState.fontFamilyOption);
		setFontColor(defaultArticleState.fontColor);
		setFontSize(defaultArticleState.fontSizeOption);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setContentWidth(defaultArticleState.contentWidth);
	};

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
					onSubmit={handleFormSubmit}
					onReset={handleFormReset}
					className={styles.form}
					title="Title"
					name="TTT"
				>
					<div>
						<h2
							style={{
								display: "inline-block",
								textAlign: "left",
								fontSize: 31,
								fontFamily: "Open Sans, sans-serif",
								fontWeight: 800,
								marginBlockEnd: 50,
							}}
						>
							ЗАДАЙТЕ ПАРАМЕТРЫ
						</h2>
					</div>

					<Select
						selected={fontFamily}
						options={fontFamilyOptions}
						onChange={setFontFamily}
						title="ШРИФТ"
					/>

					<RadioGroup
						selected={fontSize}
						options={fontSizeOptions}
						onChange={setFontSize}
						title="РАЗМЕР ШРИФТА"
						name={"Font Size"}
					/>

					<Select
						selected={fontColor}
						options={fontColors}
						onChange={setFontColor}
						title="ЦВЕТ ШРИФТА"
					/>

					<Separator />

					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={setBackgroundColor}
						title="ЦВЕТ ФОНА"
					/>

					<Select
						selected={contentWidth}
						options={contentWidthArr}
						onChange={setContentWidth}
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
