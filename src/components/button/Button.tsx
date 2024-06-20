import { Text } from "components/text";

import styles from "./Button.module.scss";
import clsx from "clsx";

export const Button = ({
	title,
	onClick,
	type,
}: {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}) => {
	return (
		<button
			className={
				type !== "reset"
					? clsx(styles.button)
					: clsx(styles.button, styles.button_reset)
			}
			type={type}
			onClick={onClick}
		>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
