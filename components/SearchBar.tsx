import { Input, XStack } from 'tamagui';

export default function SearchBar({ value, onChange }) {
	return (
		<XStack p="$2" bg="$backgroundStrong" br="$6" my="$3">
			<Input
				flex={1}
				placeholder="Search activities..."
				value={value}
				onChangeText={onChange}
				fontSize={16} // FIX ✔
			/>
		</XStack>
	);
}
