import ActivityCardWeb from '@/components/ActivityCard.web';
import { render } from '@testing-library/react-native';
import React from 'react';

const mockActivity = {
	id: '1',
	title: 'Machine Learning',
	type: 'class',
	status: 'not_started',
	duration: 45,
};

describe('ActivityCardWeb', () => {
	it('renders activity title', () => {
		const { getByText } = render(<ActivityCardWeb activity={mockActivity} />);
		expect(getByText('Machine Learning')).toBeTruthy();
	});

	it('renders Start button for not_started', () => {
		const { getByText } = render(<ActivityCardWeb activity={mockActivity} />);
		expect(getByText('Start')).toBeTruthy();
	});
});
