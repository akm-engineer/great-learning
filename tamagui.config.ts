import { createAnimations } from '@tamagui/animations-react-native';
import { createTokens } from '@tamagui/core';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';
import { createTamagui } from 'tamagui';

const animations = createAnimations({
	pulse: {
		type: 'timing',
		duration: 700,
		easing: (t) => t,
	},
});

export const config = createTamagui({
	themes,
	tokens: createTokens(tokens),
	shorthands,
	animations,
});

export default config;

declare module 'tamagui' {
	interface TamaguiCustomConfig extends ReturnType<typeof createTamagui> {}
}
