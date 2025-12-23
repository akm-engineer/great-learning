import ActivityDetailsNative from '@/app/activity/ActivityDetails.native';
import { useActivityStore } from '@/store/activityStore';
import { render } from '@testing-library/react-native';
import React from 'react';

jest.mock('expo-router', () => ({
	useLocalSearchParams: () => ({ id: '1' }),
}));

test('renders details page', () => {
	useActivityStore
		.getState()
		.setActivities([
			{
				id: '1',
				title: 'ML',
				type: 'class',
				status: 'not_started',
				duration: 45,
			},
		]);

	const { getByText } = render(<ActivityDetailsNative />);
	expect(getByText('ML')).toBeTruthy();
});
