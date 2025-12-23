import { statusColors, typeColors, typeLabel } from '@/data/theme-utlis';
import { useRouter } from 'expo-router';
import { Button, Card, Text, XStack, YStack } from 'tamagui';
import { Activity } from '../store/activityStore';

export default function ActivityCardWeb({ activity }: { activity: Activity }) {
	const router = useRouter();

	return (
		<Card
			onPress={() => router.push(`/activity/${activity.id}`)}
			p="$6"
			br="$8"
			mb="$5"
			bw={1}
			bc="$gray6"
			bg="$background"
			hoverStyle={{ scale: 0.98, bc: '$gray8' }}
			pressStyle={{ scale: 0.96 }}
			cursor="pointer">
			<YStack space="$4">
				{/* Title + type */}
				<XStack jc="space-between" ai="center">
					<Text
						fontSize={24}
						fontWeight="700"
						color="$color12"
						maxWidth="85%"
						lineHeight={32}>
						{activity.title}
					</Text>

					<Text
						bg={typeColors[activity.type]}
						color="white"
						px="$3"
						py="$1.5"
						br="$4"
						fontWeight="700"
						fontSize={13}>
						{typeLabel[activity.type]}
					</Text>
				</XStack>

				{/* Status */}
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
						<Text fontSize={14} color="$gray11">
							• {activity.duration} mins
						</Text>
					)}
				</XStack>

				{/* Action button */}
				<Button
					bg="$blue10"
					color="white"
					br="$6"
					px="$6"
					py="$2.5"
					fontWeight="700"
					hoverStyle={{ bg: '$blue9' }}
					pressStyle={{ scale: 0.96 }}>
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
