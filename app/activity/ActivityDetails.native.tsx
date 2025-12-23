import { useLocalSearchParams } from 'expo-router';
import { Button, Card, H4, Paragraph, Text, XStack, YStack } from 'tamagui';
import { useActivityStore } from '../../store/activityStore';

export default function ActivityDetailsNative() {
	const { id } = useLocalSearchParams();
	const activity = useActivityStore((s) =>
		s.activities.find((a) => a.id === id),
	);

	if (!activity) return <Text>Activity not found</Text>;

	return (
		<YStack f={1} bg="$gray2" p="$4" pt="$6" space="$4">
			{/* Title */}
			<H4 color="$gray12" fontSize={24} lineHeight={30} fontWeight="800">
				{activity.title}
			</H4>

			{/* Detail Card */}
			<Card bg="white" p="$4" br="$6" shadowColor="#0002" shadowRadius={8}>
				<YStack space="$3">
					{/* Type + Status */}
					<XStack jc="space-between" ai="center">
						<Text
							bg="$blue10"
							color="white"
							px="$3"
							py="$1"
							br="$4"
							fontSize={12}
							fontWeight="700">
							{activity.type.toUpperCase()}
						</Text>

						<Text
							bg={
								activity.status === 'completed'
									? '#34C759'
									: activity.status === 'in_progress'
									? '#FF9500'
									: '#8E8E93'
							}
							color="white"
							px="$3"
							py="$1"
							br="$4"
							fontSize={12}
							fontWeight="700">
							{activity.status.replace('_', ' ')}
						</Text>
					</XStack>

					{/* Info */}
					<YStack>
						<Text fontSize={16} fontWeight="600" color="$gray12">
							Activity Details
						</Text>

						<Paragraph mt="$1" color="$gray10" lineHeight={20} fontSize={14}>
							This activity is part of your learning journey. Complete it to
							progress further in your program.
						</Paragraph>
					</YStack>

					{activity.duration && (
						<XStack ai="center" gap="$1" mt="$2">
							<Text fontSize={15} color="$gray11">
								Duration:
							</Text>
							<Text fontSize={15} color="$gray12" fontWeight="700">
								{activity.duration} mins
							</Text>
						</XStack>
					)}

					<Button
						bg="#0A84FF"
						color="white"
						br="$8"
						px="$5"
						py="$2"
						mt="$3"
						fontSize={15}
						fontWeight="700">
						{activity.status === 'completed'
							? 'Review Activity'
							: activity.status === 'in_progress'
							? 'Continue Activity'
							: 'Start Activity'}
					</Button>
				</YStack>
			</Card>
		</YStack>
	);
}
