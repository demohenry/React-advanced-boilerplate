import { Story, Meta } from '@storybook/react/types-6-0';
import Main from './Main';

export default {
	title: 'Main',
	component: Main,
	args: {
		title: 'title default',
<<<<<<< HEAD
		description: 'description default',
	},
=======
		description: 'description default'
	}
>>>>>>> 6f663fe8f59f82d14c959dc25316d522be9846ab
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
	title: 'title Basic',
	description: 'description Basic',
};

export const Design: Story = (args) => <Main {...args} />;
Design.args = {
	title: 'title Design',
<<<<<<< HEAD
	description: 'description Design',
=======
	description: 'description Design'
>>>>>>> 6f663fe8f59f82d14c959dc25316d522be9846ab
};
