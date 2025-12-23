import { useRouter } from 'expo-router';
import { Button, Card, Text, XStack, YStack } from 'tamagui';
import { Activity, ActivityStatus, ActivityType } from '../store/activityStore';

const statusColors: Record<ActivityStatus, string> = {
	not_started: '#8E8E93',
	in_progress: '#FF9500',
	completed: '#34C759',
};

const typeColors: Record<ActivityType, string> = {
	class: '#0A84FF',
	assignment: '#FFD60A',
	quiz: '#0A84FF',
	discussion: '#FFD60A',
};

const typeLabel: Record<ActivityType, string> = {
	class: 'Online Class',
	assignment: 'Assignment',
	quiz: 'Quiz',
	discussion: 'Discussion',
};

export default function ActivityCardWeb({ activity }: { activity: Activity }) {
	const router = useRouter();

	return (
		<Card
			onPress={() => router.push(`/activity/${activity.id}`)}
			p="$6"
			br="$8"
			mb="$5"
			borderWidth={1}
			borderColor="$gray10"
			cursor="pointer">
			<YStack space="$4">
				{/* Title + Type Badge */}
				<XStack jc="space-between" ai="center">
					<Text
						fontSize={24}
						fontWeight="700"
						color="#111"
						maxWidth="85%"
						lineHeight={32}>
						{activity.title}
					</Text>

					<Text
						bg={typeColors[activity.type]}
						color={activity.type === 'assignment' ? '#333' : 'white'}
						px="$3"
						py="$1.5"
						br="$4"
						fontWeight="700"
						fontSize={13}>
						{typeLabel[activity.type]}
					</Text>
				</XStack>

				{/* Status + info */}
				<XStack ai="center" gap="$3">
					<Text
						bg={statusColors[activity.status]}
						color="white"
						px="$4"
						py="$1.5"
						br="$6"
						fontWeight="700"
						fontSize={13}>
						{activity.status.replace('_', ' ')}
					</Text>

					{activity.duration && (
						<Text fontSize={14} color="$gray10">
							• {activity.duration} mins
						</Text>
					)}
				</XStack>

				{/* CTA Button */}
				<Button
					bg="#0A84FF"
					color="white"
					br="$6"
					px="$6"
					py="$2.5"
					fontWeight="700"
					fontSize={15}
					alignSelf="flex-start"
					hoverStyle={{ bg: '#006fdd' }}
					pressStyle={{ scale: 0.97 }}>
					{activity.status === 'completed'
						? 'Review'
						: activity.status === 'in_progress'
						? 'Continue'
						: 'Start'}
				</Button>
			</YStack>
		</Card>
	);
}
