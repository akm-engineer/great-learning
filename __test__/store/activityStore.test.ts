import { useActivityStore } from '@/store/activityStore';
import { act } from '@testing-library/react-native';

describe('Activity Store Tests', () => {
	it('sets activity list', () => {
		act(() => {
			useActivityStore
				.getState()
				.setActivities([
					{ id: '1', title: 'ML', type: 'quiz', status: 'not_started' },
				]);
		});

		expect(useActivityStore.getState().activities.length).toBe(1);
	});

	it('updates activity status', () => {
		act(() => {
			useActivityStore.getState().updateStatus('1', 'completed');
		});

		expect(useActivityStore.getState().activities[0].status).toBe('completed');
	});
});
