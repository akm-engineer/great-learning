import { useRouter } from 'expo-router';
import { Platform } from 'react-native';
import { Button, Card, Text, XStack, YStack } from 'tamagui';
import { Activity, ActivityStatus, ActivityType } from '../store/activityStore';

const statusColors: Record<ActivityStatus, string> = {
	not_started: '#D5D8E1',
	in_progress: '#FFB800',
	completed: '#34C759',
};

const typeColors: Record<ActivityType, string> = {
	class: '#0A84FF',
	assignment: '#AF52DE',
	quiz: '#FF453A',
	discussion: '#30D158',
};

const typeLabel: Record<ActivityType, string> = {
	class: 'Online Class',
	assignment: 'Assignment',
	quiz: 'Quiz',
	discussion: 'Discussion',
};

export default function ActivityCard({ activity }: { activity: Activity }) {
	const router = useRouter();
	return (
		<Card
			onPress={() => router.push(`/activity/${activity.id}`)}
			bg="white"
			p="$5"
			mb="$4"
			br="$8"
			elevate
			shadowRadius={20}
			shadowColor="#0003"
			animation="bouncy"
			transition="all 250ms ease-in-out"
			hoverStyle={{ scale: 0.97, bg: '#f7f7f7' }}
			pressStyle={{ scale: 0.95 }}>
			<YStack space="$4">
				{/* Title + Type */}
				<XStack jc="space-between" ai="flex-start" gap="$3">
					<Text
						flex={1}
						fontSize={Platform.OS === 'web' ? 26 : 16}
						numberOfLines={2}
						ellipsizeMode="tail"
						fontWeight="700"
						color="#1c1c1e"
						lineHeight={Platform.OS === 'web' ? 32 : 20}>
						{activity.title}
					</Text>

					<Text
						bg={typeColors[activity.type]}
						color="white"
						px="$3.5"
						py="$1.5"
						br="$9"
						fontSize={Platform.OS === 'web' ? 13 : 10}
						fontWeight="600"
						shadowColor="#0002"
						shadowOffset={{ width: 0, height: 1 }}
						shadowOpacity={0.2}
						shadowRadius={2}>
						{typeLabel[activity.type]}
					</Text>
				</XStack>

				{/* Status */}
				<Text
					bg={statusColors[activity.status]}
					px="$4"
					py="$1.5"
					br="$9"
					color="#fff"
					fontWeight="700"
					fontSize={Platform.OS === 'web' ? 13 : 10}
					alignSelf="flex-start"
					textTransform="capitalize"
					shadowColor="rgba(0,0,0,0.15)"
					shadowOffset={{ width: 0, height: 2 }}
					shadowOpacity={0.25}
					shadowRadius={4}>
					{activity.status.replace('_', ' ')}
				</Text>

				{/* CTA — Premium Blue Button */}
				<Button
					bg="#0A84FF"
					color="white"
					br="$6"
					px="$6"
					py="$2"
					fontWeight="700"
					hoverStyle={{ bg: '#0077EE' }}
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
