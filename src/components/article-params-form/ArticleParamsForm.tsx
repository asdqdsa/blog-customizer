import { ArrowButton } from "components/arrow-button";
import { Button } from "components/button";

import styles from "./ArticleParamsForm.module.scss";
import { RadioGroup } from "../radio-group";
import { Children, useState } from "react";
import { Separator } from "../separator";
import { Select } from "../select";
import type { OnClick, ArrowButtonProps } from "../arrow-button/ArrowButton";

export const ArticleParamsForm = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [fontSize, setFontSize] = useState("");
	const [fontColor, setFontColor] = useState("");
	const [backgroundColor, setBackgroundColor] = useState("");
	const handleMenuState: OnClick = () => setIsOpenMenu(!isOpenMenu);

	const handleArticleFormChange = () => {
		console.log("hotel foxtrot");
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
						selected={{
							title: "Ubuntu",
							value: "Ubuntu",
							className: "ubuntu",
							optionClassName: "ubuntu",
						}}
						// value={"uniform"}
						options={[
							{
								title: "Open Sans",
								value: "Open Sans",
								className: "open-sans",
								optionClassName: "open-sans",
							},
							{
								title: "Ubuntu",
								value: "Ubuntu",
								className: "ubuntu",
								optionClassName: "ubuntu",
							},
							{
								title: "Cormorant Garamond",
								value: "Cormorant Garamond",
								className: "cormorant-garamond",
								optionClassName: "cormorant-garamond",
							},
							{
								title: "Days One",
								value: "Days One",
								className: "days-one",
								optionClassName: "days-one",
							},
							{
								title: "Merriweather",
								value: "Merriweather",
								className: "merriweather",
								optionClassName: "merriweather",
							},
						]}
						placeholder="papahotel"
						onChange={handleArticleFormChange}
						onClose={handleArticleFormClose}
						title="Tango"
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
