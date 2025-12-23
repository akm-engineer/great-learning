import { useLocalSearchParams } from 'expo-router';
import { Button, Card, H4, Paragraph, Text, XStack, YStack } from 'tamagui';

import DetailsTabs from '@/components/details-tab';
import ActivitySkeleton from '@/components/ui/activity-skelton';
import BackButton from '@/components/ui/back-button';
import { mockActivities } from '@/data/activities';
import { useEffect } from 'react';
import { useActivityStore } from '../../store/activityStore';

export default function ActivityDetailsNative() {
	const { id } = useLocalSearchParams();
	const activity = useActivityStore((s) =>
		s.activities.find((a) => a.id === id),
	);
	const { activities } = useActivityStore();
	const setActivities = useActivityStore((s) => s.setActivities);

	useEffect(() => {
		if (activities.length === 0) {
			setActivities(mockActivities);
		}
	}, []);

	if (!activity) return <ActivitySkeleton />;

	return (
		<YStack f={1} bg="$gray2" p="$4" pt="$6" space="$4">
			<XStack w="100%" jc="flex-start">
				<BackButton />
			</XStack>

			<H4 fontSize={26} pb="$2" fontWeight="800" color="$gray12">
				{activity.title}
			</H4>

			<Card bg="white" p="$4" br="$6" shadowColor="#0002" shadowRadius={8}>
				<YStack space="$3">
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

					<Paragraph color="$gray10" lineHeight={20} fontSize={14}>
						This activity is part of your learning journey. Complete it to
						progress further.
					</Paragraph>

					{activity.duration && (
						<Text fontSize={15} color="$gray12">
							Duration: <Text fontWeight="800">{activity.duration} mins</Text>
						</Text>
					)}

					<Button
						bg="#0A84FF"
						color="white"
						br="$8"
						px="$5"
						py="$2"
						mt="$3"
						fontWeight="700">
						{activity.status === 'completed'
							? 'Review Activity'
							: activity.status === 'in_progress'
							? 'Continue Activity'
							: 'Start Activity'}
					</Button>
				</YStack>
			</Card>

			{/* ➤ ADVANCED TABS (Udemy-style) */}
			<DetailsTabs />
		</YStack>
	);
}
