import { ArrowButton } from "components/arrow-button";
import { Button } from "components/button";

import styles from "./ArticleParamsForm.module.scss";
import { RadioGroup } from "../radio-group";
import {
	Children,
	type FormEvent,
	useState,
	type SyntheticEvent,
	useRef,
} from "react";
import { Separator } from "../separator";
import { Select } from "../select";
import type { OnClick, ArrowButtonProps } from "../arrow-button/ArrowButton";
import {
	defaultArticleState,
	type ArticleStateType,
	fontFamilyOptions,
	fontColors,
	fontSizeOptions,
	contentWidthArr,
	backgroundColors,
} from "src/constants/articleProps";
import clsx from "clsx";
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
	// const [backgroundColor, setBackgroundColor] = useState("");
	const handleMenuState: OnClick = () => setIsOpenMenu(!isOpenMenu);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleArticleFormChange = (value: any) => {
		setFontFamily(value);
		console.log("setting font type");
	};
	const handleArticleFormClose = () => {
		console.log("hotel charlie");
	};

	const handleFormSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		console.log("hehe", { fontFamilyOption: fontFamily });
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
		console.log("hehe", { fontFamilyOption: fontFamily });
		props.setArticleState({
			...props.articleState,
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontColor: defaultArticleState.fontColor,
			fontSizeOption: defaultArticleState.fontSizeOption,
			contentWidth: defaultArticleState.contentWidth,
			backgroundColor: defaultArticleState.backgroundColor,
		});
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
						title="Font"
					/>
					<Select
						selected={fontColor}
						options={fontColors}
						onChange={setFontColor}
						title="Color"
					/>

					<RadioGroup
						selected={fontSize}
						options={fontSizeOptions}
						onChange={setFontSize}
						title="Size"
						name={""}
					/>

					<Separator />

					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={setBackgroundColor}
						title="Background Color"
					/>

					<Select
						selected={contentWidth}
						options={contentWidthArr}
						onChange={setContentWidth}
						title="Width"
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
