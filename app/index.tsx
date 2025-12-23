import { useEffect, useState } from 'react';

import FilterBar from '@/components/FilterBar';
import SearchBar from '@/components/SearchBar';
import { mockActivities } from '@/data/activities';
import { useDebounce } from '@/hooks/use-debounce';
import { Platform } from 'react-native';
import { ScrollView, Text, XStack, YStack } from 'tamagui';
import ActivityCard from '../components/ActivityCard';
import { useActivityStore } from '../store/activityStore';

export default function Home() {
	const { activities, typeFilter, statusFilter, search } = useActivityStore();

	const setActivities = useActivityStore((s) => s.setActivities);
	const setTypeFilter = useActivityStore((s) => s.setTypeFilter);
	const setStatusFilter = useActivityStore((s) => s.setStatusFilter);
	const setSearch = useActivityStore((s) => s.setSearch);

	const [localSearch, setLocalSearch] = useState('');

	const debouncedSearch = useDebounce((text: string) => {
		setSearch(text);
	}, 300);

	useEffect(() => {
		debouncedSearch(localSearch);
	}, [localSearch]);
	useEffect(() => {
		setActivities(mockActivities);
	}, []);

	const filtered = activities.filter((a) => {
		const matchesType = typeFilter === 'all' || a.type === typeFilter;
		const matchesStatus = statusFilter === 'all' || a.status === statusFilter;
		const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());

		return matchesType && matchesStatus && matchesSearch;
	});

	const isWeb = Platform.OS === 'web';

	return (
		<ScrollView bg="$gray2">
			<YStack p="$4" pt="$5" maxWidth={1200} w="100%" als="center">
				<XStack ai="baseline" gap="$2" mb="$3">
					<Text fontSize={32} fontWeight="700" color="$gray12">
						Activities
					</Text>
					<Text fontSize={32} fontWeight="400" color="$gray10">
						({filtered.length})
					</Text>
				</XStack>

				<SearchBar
					value={localSearch} // 🔥 Shows text instantly
					onChange={setLocalSearch}
				/>

				<FilterBar
					type={typeFilter}
					status={statusFilter}
					setType={setTypeFilter}
					setStatus={setStatusFilter}
				/>

				{isWeb ? (
					<XStack fw="wrap" gap="$4" jc="space-between">
						{filtered.map((a) => (
							<YStack key={a.id} width="48%">
								<ActivityCard activity={a} />
							</YStack>
						))}
					</XStack>
				) : (
					<YStack>
						{filtered.map((a) => (
							<ActivityCard key={a.id} activity={a} />
						))}
					</YStack>
				)}
			</YStack>
		</ScrollView>
	);
}
