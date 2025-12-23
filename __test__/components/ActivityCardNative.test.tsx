import ActivityCardNative from '@/components/ActivityCard.native';
import { render } from '@testing-library/react-native';
import React from 'react';

const mockActivity = {
	id: '1',
	title: 'Quiz 1',
	type: 'quiz',
	status: 'in_progress',
};

test('renders Continue button', () => {
	const { getByText } = render(<ActivityCardNative activity={mockActivity} />);
	expect(getByText('Continue')).toBeTruthy();
});
