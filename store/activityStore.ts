import { create } from 'zustand';

export type ActivityType = 'class' | 'assignment' | 'quiz' | 'discussion';
export type ActivityStatus = 'not_started' | 'in_progress' | 'completed';

export interface Activity {
	id: string;
	title: string;
	type: ActivityType;
	status: ActivityStatus;
	dueDate?: string;
	duration?: number;
}

interface Store {
	activities: Activity[];

	typeFilter: ActivityType | 'all';
	statusFilter: ActivityStatus | 'all';
	search: string;

	setActivities: (a: Activity[]) => void;
	setTypeFilter: (t: ActivityType | 'all') => void;
	setStatusFilter: (s: ActivityStatus | 'all') => void;
	setSearch: (q: string) => void;

	updateStatus: (id: string, s: ActivityStatus) => void;
}

export const useActivityStore = create<Store>((set, get) => ({
	activities: [],
	typeFilter: 'all',
	statusFilter: 'all',
	search: '',

	setActivities: (a) => set({ activities: a }),
	setTypeFilter: (t) => set({ typeFilter: t }),
	setStatusFilter: (s) => set({ statusFilter: s }),
	setSearch: (q) => set({ search: q }),

	updateStatus: (id, newStatus) => {
		set({
			activities: get().activities.map((a) =>
				a.id === id ? { ...a, status: newStatus } : a,
			),
		});
	},
}));
