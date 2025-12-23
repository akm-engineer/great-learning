import DetailsTabs from '@/components/details-tab';
import ActivitySkeleton from '@/components/ui/activity-skelton';
import BackButton from '@/components/ui/back-button';
import { mockActivities } from '@/data/activities';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import {
	Button,
	Card,
	H2,
	Paragraph,
	ScrollView,
	Text,
	XStack,
	YStack,
} from 'tamagui';
import { useActivityStore } from '../../store/activityStore';

export default function ActivityDetailsWeb() {
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
		<ScrollView bg="$gray2" f={1}>
			<YStack w="100%" ai="center" pt="$6" pb="$10">
				{/* Outer container */}
				<YStack w="100%" maxWidth={1000} px="$6" space="$6">
					{/* Top Row = Back + Title */}
					<YStack space="$3">
						<XStack w="100%" jc="flex-start">
							<BackButton />
						</XStack>

						<H2 fontSize={40} lineHeight={46} fontWeight="800" color="$gray12">
							{activity.title}
						</H2>
					</YStack>

					{/* TWO COLUMN LAYOUT */}
					<XStack w="100%" gap="$6">
						{/* LEFT CONTENT COLUMN */}
						<YStack flex={1} space="$5">
							{/* DESCRIPTION SECTION */}
							<Card
								bg="white"
								p="$6"
								br="$8"
								shadowColor="#0002"
								shadowRadius={12}>
								<YStack space="$4">
									<Text fontSize={20} fontWeight="700" color="$gray12">
										Activity Overview
									</Text>

									<Paragraph fontSize={16} lineHeight={26} color="$gray10">
										This activity is part of your learning journey. Complete it
										to progress further in your program. You can review its
										details, start the task, or continue where you left off.
									</Paragraph>

									{activity.duration && (
										<Text fontSize={17} fontWeight="600" color="$gray11">
											Duration:{' '}
											<Text color="$gray12" fontWeight="800">
												{activity.duration} mins
											</Text>
										</Text>
									)}
								</YStack>
							</Card>

							{/* TABS (Overview/Resources/Notes) */}
							<Card
								bg="white"
								p="$6"
								br="$8"
								shadowColor="#0002"
								shadowRadius={12}>
								<DetailsTabs />
							</Card>
						</YStack>

						{/* RIGHT SIDEBAR COLUMN */}
						<YStack width={300} space="$4" pos="sticky" top={50}>
							{/* Sidebar Card */}
							<Card
								bg="white"
								p="$5"
								br="$8"
								shadowColor="#0003"
								shadowRadius={18}>
								<YStack space="$4">
									{/* Type Badge */}
									<Text
										px="$4"
										py="$1.5"
										br="$5"
										bg="$blue10"
										color="white"
										fontWeight="700"
										fontSize={14}
										alignSelf="flex-start">
										{activity.type.toUpperCase()}
									</Text>

									{/* Status Badge */}
									<Text
										px="$4"
										py="$1.5"
										br="$5"
										color="white"
										fontWeight="700"
										fontSize={14}
										alignSelf="flex-start"
										bg={
											activity.status === 'completed'
												? '#34C759'
												: activity.status === 'in_progress'
												? '#FF9500'
												: '#8E8E93'
										}>
										{activity.status.replace('_', ' ')}
									</Text>

									{/* CTA Button */}
									<Button
										bg="#0A84FF"
										color="white"
										br="$6"
										px="$6"
										py="$3"
										fontSize={16}
										fontWeight="700"
										mt="$2"
										hoverStyle={{ bg: '#0070e8' }}
										pressStyle={{ scale: 0.97 }}>
										{activity.status === 'completed'
											? 'Review Activity'
											: activity.status === 'in_progress'
											? 'Continue Activity'
											: 'Start Activity'}
									</Button>
								</YStack>
							</Card>
						</YStack>
					</XStack>
				</YStack>
			</YStack>
		</ScrollView>
	);
}
