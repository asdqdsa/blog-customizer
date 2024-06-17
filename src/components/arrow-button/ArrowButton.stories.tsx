import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ArrowButton } from "./ArrowButton";
import type { ArrowButtonProps } from "./ArrowButton";

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
	args: { onClick: fn() },
	parameters: { actions: { argTypesRegex: "^on.*" } },
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton onClick={() => console.log()} menuState={false} />
			</>
		);
	},
};
