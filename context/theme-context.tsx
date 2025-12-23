// context/ThemeContext.tsx
import { config } from '@/tamagui.config';
import { createContext, ReactNode, useContext, useState } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';

type ThemeContextType = {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<TamaguiProvider config={config}>
				<Theme name={theme}>{children}</Theme>
			</TamaguiProvider>
		</ThemeContext.Provider>
	);
}

export const useThemeSwitch = () => useContext(ThemeContext);
