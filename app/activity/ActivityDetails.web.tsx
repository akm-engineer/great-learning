import { useLocalSearchParams } from 'expo-router';
import { Button, Card, H2, Paragraph, Text, XStack, YStack } from 'tamagui';
import { useActivityStore } from '../../store/activityStore';

export default function ActivityDetailsWeb() {
	const { id } = useLocalSearchParams();
	const activity = useActivityStore((s) =>
		s.activities.find((a) => a.id === id),
	);

	if (!activity) return <Text>Activity not found</Text>;

	return (
		<YStack bg="$gray2" f={1} ai="center" p="$8">
			<YStack w="100%" maxWidth={900} space="$6">
				<H2 fontSize={34} lineHeight={40} fontWeight="800">
					{activity.title}
				</H2>

				<Card
					bg="white"
					p="$7"
					br="$8"
					shadowColor="rgba(0,0,0,0.12)"
					shadowRadius={24}
					shadowOffset={{ width: 0, height: 8 }}>
					<YStack space="$5">
						<XStack jc="space-between">
							<Text
								px="$4"
								py="$1.5"
								br="$5"
								bg="$blue10"
								color="white"
								fontWeight="700">
								{activity.type.toUpperCase()}
							</Text>

							<Text
								px="$4"
								py="$1.5"
								br="$5"
								bg={
									activity.status === 'completed'
										? '#34C759'
										: activity.status === 'in_progress'
										? '#FF9500'
										: '#8E8E93'
								}
								color="white"
								fontWeight="700">
								{activity.status.replace('_', ' ')}
							</Text>
						</XStack>

						<Paragraph color="$gray10" fontSize={17} lineHeight={26}>
							This activity is part of your learning journey. Complete it to
							progress further. You can review its details, start the task, or
							continue where you left off.
						</Paragraph>

						{activity.duration && (
							<Text fontSize={17} fontWeight="600">
								Duration: <Text fontWeight="800">{activity.duration} mins</Text>
							</Text>
						)}

						<Button
							bg="#0A84FF"
							color="white"
							br="$6"
							px="$7"
							py="$3"
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
		</YStack>
	);
}
