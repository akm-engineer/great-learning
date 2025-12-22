// app/_layout.tsx
import { Stack } from 'expo-router';
import { TamaguiProvider, Theme } from 'tamagui';
import { config } from '../tamagui.config';

export default function RootLayout() {
	return (
		<TamaguiProvider config={config}>
			<Theme name="light">
				<Stack screenOptions={{ headerShown: false }} />
			</Theme>
		</TamaguiProvider>
	);
}
