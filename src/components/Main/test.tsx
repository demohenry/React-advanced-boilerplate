import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
	it('should render the heading', () => {
		const { container } = render(<Main />);

		expect(
			screen.getByRole('heading', { name: /react avançado/i })
		).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render colors correctly', () => {
		const { container } = render(<Main />);

		expect(container.firstChild).toHaveStyle({
<<<<<<< HEAD
			'background-color': '#06092b',
=======
			'background-color': '#06092b'
>>>>>>> 6f663fe8f59f82d14c959dc25316d522be9846ab
		});
	});
});
