import { ArrowButton } from "components/arrow-button";
import { Button } from "components/button";

import styles from "./ArticleParamsForm.module.scss";
import { RadioGroup } from "../radio-group";
import { Children, useState } from "react";
import { Separator } from "../separator";
import { Select } from "../select";
import type { OnClick, ArrowButtonProps } from "../arrow-button/ArrowButton";
import {
	defaultArticleState,
	type ArticleStateType,
	fontFamilyOptions,
} from "src/constants/articleProps";

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	setArticleState: (args: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const [fontFamily, setFontFamily] = useState(
		defaultArticleState.fontFamilyOption,
	);
	const [fontSize, setFontSize] = useState("");
	const [fontColor, setFontColor] = useState("");
	const [backgroundColor, setBackgroundColor] = useState("");
	const handleMenuState: OnClick = () => setIsOpenMenu(!isOpenMenu);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleArticleFormChange = (value: any) => {
		setFontFamily(value);
		console.log("setting font type");
	};
	const handleArticleFormClose = () => {
		console.log("hotel charlie");
	};
	return (
		<>
			<ArrowButton menuState={isOpenMenu} onClick={handleMenuState} />
			<aside
				className={
					isOpenMenu
						? `${styles.container} ${styles.container_open}`
						: `${styles.container}`
				}
			>
				<form className={styles.form}>
					<Select
						selected={fontFamily}
						options={fontFamilyOptions}
						onChange={handleArticleFormChange}
						title="Font"
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
						<Button title="Сбросить" type="reset" />
						<Button title="Применить" type="submit" />
					</div>
				</form>
			</aside>
		</>
	);
};
