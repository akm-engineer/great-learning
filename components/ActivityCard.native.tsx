import { statusColors, typeColors, typeLabel } from '@/data/theme-utlis';
import { useRouter } from 'expo-router';
import { Button, Card, Text, XStack, YStack } from 'tamagui';
import { Activity } from '../store/activityStore';

export default function ActivityCardNative({
	activity,
}: {
	activity: Activity;
}) {
	const router = useRouter();

	return (
		<Card
			onPress={() => router.push(`/activity/${activity.id}`)}
			p="$4"
			br="$6"
			mb="$4"
			bordered
			bg="$background"
			bc="$gray6"
			pressStyle={{ scale: 0.97 }}>
			<YStack space="$3">
				<XStack jc="space-between" ai="center">
					<Text
						flex={1}
						fontSize={18}
						fontWeight="700"
						color="$color12"
						numberOfLines={2}>
						{activity.title}
					</Text>

					<Text
						bg={typeColors[activity.type]}
						color="white"
						px="$2.5"
						py="$1"
						br="$2"
						fontSize={11}
						fontWeight="700">
						{typeLabel[activity.type]}
					</Text>
				</XStack>

				<XStack jc="space-between" ai="center">
					<Text
						bg={statusColors[activity.status]}
						color="white"
						px="$3"
						py="$1.5"
						br="$6"
						fontSize={12}
						fontWeight="700">
						{activity.status.replace('_', ' ')}
					</Text>

					<Button
						bg="$blue10"
						color="white"
						br="$8"
						px="$4"
						size="$3"
						fontWeight="700">
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
