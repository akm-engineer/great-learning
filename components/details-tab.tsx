import { useState } from 'react';
import { Platform } from 'react-native';
import { Button, Text, XStack, YStack } from 'tamagui';
import Divider from './ui/divider';

export default function DetailsTabs() {
	const [tab, setTab] = useState('overview');

	const tabs = [
		{ key: 'overview', label: 'Overview' },
		{ key: 'resources', label: 'Resources' },
		{ key: 'notes', label: 'Notes' },
	];

	return (
		<YStack space="$4" mt="$4">
			{/* Tab Header */}
			<XStack gap="$3">
				{tabs.map((t) => (
					<Button
						key={t.key}
						variant="outlined"
						borderColor={tab === t.key ? '$blue10' : '$gray6'}
						px={Platform.OS === 'android' ? '$2' : '$4'}
						br={Platform.OS === 'android' ? '$3' : '$6'}
						onPress={() => setTab(t.key)}
						bg={tab === t.key ? '$blue10' : 'transparent'}
						color={tab === t.key ? 'white' : '$gray11'}>
						{t.label}
					</Button>
				))}
			</XStack>

			<Divider />

			{/* Tab Content */}
			{tab === 'overview' && (
				<Text fontSize={15} color="$gray11" lineHeight={22}>
					This activity helps you understand key concepts in this module. Make
					sure to complete it before moving to the next lesson.
				</Text>
			)}

			{tab === 'resources' && (
				<YStack space="$2">
					<Text>- Slides.pdf</Text>
					<Text>- Sample code.zip</Text>
					<Text>- Additional reference links</Text>
				</YStack>
			)}

			{tab === 'notes' && (
				<Text color="$gray11">No notes yet. Add some later.</Text>
			)}
		</YStack>
	);
}
