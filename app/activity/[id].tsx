import { useLocalSearchParams } from 'expo-router';
import { Text, YStack } from 'tamagui';
import { useActivityStore } from '../../store/activityStore';

export default function ActivityDetails() {
	const { id } = useLocalSearchParams();
	const activity = useActivityStore((s) =>
		s.activities.find((a) => a.id === id),
	);

	if (!activity) return <Text>Activity not found</Text>;

	return (
		<YStack p="$4" space="$3">
			<Text fontSize={28} fontWeight="700">
				{activity.title}
			</Text>

			<Text>Type: {activity.type}</Text>
			<Text>Status: {activity.status}</Text>

			{activity.duration && <Text>Duration: {activity.duration} mins</Text>}
		</YStack>
	);
}
