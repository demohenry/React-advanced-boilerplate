import { Story, Meta } from '@storybook/react/types-6-0';
import Main from './Main';

export default {
	title: 'Main',
	component: Main,
	args: {
		title: 'title default',
		description: 'description default'
	}
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
	title: 'title Basic',
	description: 'description Basic'
};

export const Design: Story = (args) => <Main {...args} />;
Design.args = {
	title: 'title Design',
	description: 'description Design'
};
