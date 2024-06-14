import { ArrowButton } from "components/arrow-button";
import { Button } from "components/button";

import styles from "./ArticleParamsForm.module.scss";
import { RadioGroup } from "../radio-group";
import { Children, useState } from "react";
import { Separator } from "../separator";
import { Select } from "../select";
import { OnClick } from "../arrow-button/ArrowButton";

export const ArticleParamsForm = () => {
	const [isMenuOpen, setisMenuOpen] = useState(false);
	console.log(isMenuOpen);
	const handleMenuState: OnClick = () => {
		setisMenuOpen(!isMenuOpen);
		// console.log(isMenuOpen);
	};
	return (
		<>
			<ArrowButton state={isMenuOpen} onCLick={handleMenuState} />
			<aside
				className={
					isMenuOpen
						? `${styles.container} ${styles.container_open}`
						: `${styles.container}`
				}
			>
				<form className={styles.form}>
					{/* <Select
						selected={null}
						options={[
							{
								title: "aaaa",
								value: "aaa",
								className: "sss",
								optionClassName: "sdf",
							},
							{
								title: "bbbb",
								value: "bbb",
								className: "sss",
								optionClassName: "sdf",
							},
						]}
					/> */}
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
