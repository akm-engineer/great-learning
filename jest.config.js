module.exports = {
	preset: 'jest-expo',
	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
	testEnvironment: 'jsdom',
	transformIgnorePatterns: [
		'node_modules/(?!react-native|@testing-library|expo|expo-router|tamagui)',
	],
};
