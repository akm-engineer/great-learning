import Home from '@/app/index';
import { render } from '@testing-library/react-native';
import React from 'react';

test('renders Activities heading', () => {
	const { getByText } = render(<Home />);
	expect(getByText('Activities')).toBeTruthy();
});
