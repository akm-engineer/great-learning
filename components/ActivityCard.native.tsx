// THIS IS YOUR MOBILE CARD – unchanged
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

export default function ActivityCardNative({
	activity,
}: {
	activity: Activity;
}) {
	const router = useRouter();
	return (
		<Card
			onPress={() => router.push(`/activity/${activity.id}`)}
			bg="white"
			p="$4"
			mb="$3"
			br="$4"
			bordered
			borderColor="$gray5"
			animation="quick"
			pressStyle={{ scale: 0.98, opacity: 0.9 }}>
			<YStack space="$3">
				{/* Title + Type */}
				<XStack jc="space-between" ai="flex-start" gap="$3">
					<Text
						flex={1}
						fontSize={18}
						numberOfLines={2}
						fontWeight="600"
						color="$gray12">
						{activity.title}
					</Text>

					<Text
						bg={typeColors[activity.type]}
						color="white"
						px="$2.5"
						py="$1"
						br="$2"
						fontSize={11}
						fontWeight="600">
						{typeLabel[activity.type]}
					</Text>
				</XStack>

				{/* Status row */}
				<XStack jc="space-between" ai="center">
					<Text
						bg={statusColors[activity.status]}
						px="$3"
						py="$1.5"
						br="$6"
						color="white"
						fontWeight="600"
						fontSize={12}>
						{activity.status.replace('_', ' ')}
					</Text>

					<Button bg="#0A84FF" color="white" br="$8" px="$4" size="$3">
						{activity.status === 'completed'
							? 'Review'
							: activity.status === 'in_progress'
							? 'Continue'
							: 'Start'}
					</Button>
				</XStack>
			</YStack>
		</Card>
	);
}
