import { ArrowLeft } from '@tamagui/lucide-icons';
import { useRouter } from 'expo-router';
import { Button, Text, XStack } from 'tamagui';

export default function BackButton() {
	const router = useRouter();

	return (
		<Button
			chromeless
			onPress={() => router.back()}
			pressStyle={{ opacity: 0.6 }}>
			<XStack ai="center" gap="$2">
				<ArrowLeft size={20} color="#0A84FF" />
				<Text color="#0A84FF" fontWeight="600" fontSize={15}>
					Back
				</Text>
			</XStack>
		</Button>
	);
}
