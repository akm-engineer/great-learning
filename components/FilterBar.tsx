import {
	Book,
	CheckCircle2,
	ClipboardList,
	Clock,
} from '@tamagui/lucide-icons';
import { Button, Card, Text, XStack, YStack } from 'tamagui';
import { ActivityStatus, ActivityType } from '../store/activityStore';

const typeFilters: { key: ActivityType | 'all'; label: string; icon: any }[] = [
	{ key: 'all', label: 'All Activities', icon: ClipboardList },
	{ key: 'class', label: 'Classes', icon: Book },
	{ key: 'assignment', label: 'Assignments', icon: ClipboardList },
	{ key: 'quiz', label: 'Quizzes', icon: ClipboardList },
	{ key: 'discussion', label: 'Discussions', icon: ClipboardList },
];

const statusFilters: {
	key: ActivityStatus | 'all';
	label: string;
	icon: any;
}[] = [
	{ key: 'all', label: 'Any Status', icon: ClipboardList },
	{ key: 'not_started', label: 'Not Started', icon: Clock },
	{ key: 'in_progress', label: 'In Progress', icon: Clock },
	{ key: 'completed', label: 'Completed', icon: CheckCircle2 },
];

export default function FilterBar({ type, status, setType, setStatus }: any) {
	return (
		<YStack space="$4" mb="$4">
			{/* TYPE FILTER */}
			<Card bordered padded elevate size="$4">
				<Text fontSize={16} fontWeight="600" mb="$2">
					Filter by Type
				</Text>

				<XStack gap="$2" fw="wrap">
					{typeFilters.map(({ key, label, icon: Icon }) => (
						<Button
							key={key}
							size="$3"
							br="$6"
							px="$4"
							chromeless={type !== key}
							bg={type === key ? '#1E3A8A' : '#E5E7EB'}
							color={type === key ? 'white' : '#374151'}
							icon={Icon}
							onPress={() => setType(key)}>
							{label}
						</Button>
					))}
				</XStack>
			</Card>

			{/* STATUS FILTER */}
			<Card bordered padded elevate size="$4">
				<Text fontSize={16} fontWeight="600" mb="$2">
					Filter by Status
				</Text>

				<XStack gap="$2" fw="wrap">
					{statusFilters.map(({ key, label, icon: Icon }) => (
						<Button
							key={key}
							size="$3"
							br="$6"
							px="$4"
							chromeless={status !== key}
							bg={status === key ? '#1E3A8A' : '#E5E7EB'}
							color={status === key ? 'white' : '#374151'}
							icon={Icon}
							onPress={() => setStatus(key)}>
							{label}
						</Button>
					))}
				</XStack>
			</Card>
		</YStack>
	);
}
