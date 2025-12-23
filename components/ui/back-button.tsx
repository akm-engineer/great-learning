import { ArrowLeft } from '@tamagui/lucide-icons';
import { usePathname, useRouter } from 'expo-router';
import { Platform } from 'react-native';
import { Button, Text, XStack } from 'tamagui';

export default function BackButton() {
	const router = useRouter();

	const pathname = usePathname();

	const goBack = () => {
		if (Platform.OS !== 'web') {
			router.back();
			return;
		}

		const current = pathname;

		router.back();

		setTimeout(() => {
			if (window.location.pathname === current) {
				router.push('/');
			}
		}, 80);
	};

	return (
		<Button chromeless onPress={goBack} pressStyle={{ opacity: 0.6 }}>
			<XStack ai="center" gap="$2">
				<ArrowLeft size={20} color="#040404ff" />
				<Text color="#000000ff" fontWeight="600" fontSize={15}>
					Back
				</Text>
			</XStack>
		</Button>
	);
}
