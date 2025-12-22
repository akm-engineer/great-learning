import { useEffect } from 'react';

import FilterBar from '@/components/FilterBar';
import SearchBar from '@/components/SearchBar';
import { mockActivities } from '@/data/activities';
import { H2, ScrollView, YStack } from 'tamagui';
import ActivityCard from '../components/ActivityCard';
import { useActivityStore } from '../store/activityStore';

export default function Home() {
	const { activities, typeFilter, statusFilter, search } = useActivityStore();

	const setActivities = useActivityStore((s) => s.setActivities);
	const setTypeFilter = useActivityStore((s) => s.setTypeFilter);
	const setStatusFilter = useActivityStore((s) => s.setStatusFilter);
	const setSearch = useActivityStore((s) => s.setSearch);

	useEffect(() => {
		setActivities(mockActivities);
	}, []);

	const filtered = activities.filter((a) => {
		const matchesType = typeFilter === 'all' || a.type === typeFilter;
		const matchesStatus = statusFilter === 'all' || a.status === statusFilter;
		const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());

		return matchesType && matchesStatus && matchesSearch;
	});

	return (
		<ScrollView p="$4">
			<H2 mb="$4">Activities ({filtered.length})</H2>
			<SearchBar value={search} onChange={setSearch} />
			<FilterBar
				type={typeFilter}
				status={statusFilter}
				setType={setTypeFilter}
				setStatus={setStatusFilter}
			/>
			<YStack space="$3">
				{filtered.map((a) => (
					<ActivityCard key={a.id} activity={a} />
				))}
			</YStack>
		</ScrollView>
	);
}
