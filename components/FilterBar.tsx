import { useState } from 'react';
import { Platform } from 'react-native';
import { Button, ChevronDown, XStack, YStack } from 'tamagui';
import { ActivityStatus, ActivityType } from '../store/activityStore';

const typeFilters: (ActivityType | 'all')[] = [
	'all',
	'class',
	'assignment',
	'quiz',
	'discussion',
];

const statusFilters: (ActivityStatus | 'all')[] = [
	'all',
	'not_started',
	'in_progress',
	'completed',
];

export default function FilterBar({ type, status, setType, setStatus }: any) {
	const [open, setOpen] = useState(false);
	return (
		<YStack space="$2" mb="$3">
			{/* Type Filter */}
			<XStack gap={5} fw="wrap">
				{typeFilters.map((t) => (
					<Button
						key={t}
						fontSize={Platform.OS === 'android' ? 13 : 20}
						br="$2"
						size="$2"
						px="$4"
						bg={type === t ? '#1E3A8A' : '#d6d7d9ff'}
						color={type === t ? 'white' : '#374151'}
						onPress={() => setType(t)}>
						{t.charAt(0).toUpperCase() + t.slice(1)}
					</Button>
				))}
			</XStack>

			{/* Status Filter */}
			<XStack>
				<Button
					size="$3"
					px="$6"
					br="$5"
					iconAfter={ChevronDown}
					bg="$gray6"
					color="$gray12"
					onPress={() => setOpen(true)}>
					More
				</Button>
			</XStack>
		</YStack>
	);
}
