import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { XStack, YStack } from 'tamagui';

export default function ActivitySkeleton() {
	const opacity = useRef(new Animated.Value(0.4)).current;

	useEffect(() => {
		const loop = Animated.loop(
			Animated.sequence([
				Animated.timing(opacity, {
					toValue: 1,
					duration: 800,
					useNativeDriver: true,
				}),
				Animated.timing(opacity, {
					toValue: 0.4,
					duration: 800,
					useNativeDriver: true,
				}),
			]),
		);

		loop.start();

		return () => loop.stop();
	}, []);

	return (
		<YStack p="$6" w="100%" ai="center">
			<Animated.View
				style={{
					width: '70%',
					height: 40,
					backgroundColor: '#e5e5e5',
					borderRadius: 8,
					opacity,
				}}
			/>

			<XStack mt="$5" w="100%" gap="$4">
				<Animated.View
					style={{
						flex: 1,
						height: 200,
						backgroundColor: '#e5e5e5',
						borderRadius: 12,
						opacity,
					}}
				/>
				<Animated.View
					style={{
						width: 300,
						height: 200,
						backgroundColor: '#e5e5e5',
						borderRadius: 12,
						opacity,
					}}
				/>
			</XStack>
		</YStack>
	);
}
