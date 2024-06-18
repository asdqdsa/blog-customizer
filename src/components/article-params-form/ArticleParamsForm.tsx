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
				<form onSubmit={handleFormSubmit} className={styles.form}>
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
					{/* <RadioGroup
						name="Name"
						selected={{
							title: "dddd",
							value: "ddd",
							className: "sss",
							optionClassName: "sdf",
						}}
						title="Titel"
						options={[
							{
								title: "gggg",
								value: "ggg",
								className: "sss",
								optionClassName: "sdf",
							},
							{
								title: "ffff",
								value: "fff",
								className: "sss",
								optionClassName: "sdf",
							},
						]}
					></RadioGroup> */}
					{/* <Select
						selected={null}
						options={[
							{
								title: "qqqq",
								value: "qqq",
								className: "sss",
								optionClassName: "sdf",
							},
							{
								title: "rrrr",
								value: "rrr",
								className: "sss",
								optionClassName: "sdf",
							},
						]}
					/>
					<Separator />
					<Select
						selected={null}
						options={[
							{
								title: "fds",
								value: "fds",
								className: "sss",
								optionClassName: "sdf",
							},
							{
								title: "fdss",
								value: "fds",
								className: "sss",
								optionClassName: "sdf",
							},
						]}
					/>
					<Select
						selected={null}
						options={[
							{
								title: "fds",
								value: "fds",
								className: "sss",
								optionClassName: "sdf",
							},
							{
								title: "fdss",
								value: "fds",
								className: "sss",
								optionClassName: "sdf",
							},
						]}
					/> */}
					<div className={styles.bottomContainer}>
						<Button
							// onClick={}
							title="Сбросить"
							type="reset"
						/>
						<Button title="Применить" type="submit" />
					</div>
				</form>
			</aside>
		</div>
	);
};
