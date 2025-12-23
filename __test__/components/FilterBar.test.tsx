import FilterBar from '@/components/FilterBar';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

test('calls setType when type filter clicked', () => {
	const mockType = jest.fn();
	const mockStatus = jest.fn();

	const { getByText } = render(
		<FilterBar
			type="all"
			status="all"
			setType={mockType}
			setStatus={mockStatus}
		/>,
	);

	fireEvent.press(getByText('Classes'));
	expect(mockType).toHaveBeenCalledWith('class');
});
