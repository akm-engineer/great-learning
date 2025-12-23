// components/ThemeToggle.tsx
import { useThemeSwitch } from '@/context/theme-context';
import { Button, XStack } from 'tamagui';

export default function ThemeToggle() {
	const { theme, toggleTheme } = useThemeSwitch();

	return (
		<XStack jc="flex-end" w="100%" p="$3">
			<Button
				onPress={toggleTheme}
				bg="$blue10"
				color="white"
				size="$3"
				br="$6">
				{theme === 'light' ? 'Switch to Dark 🌙' : 'Switch to Light ☀️'}
			</Button>
		</XStack>
	);
}
