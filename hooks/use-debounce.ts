import { useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay = 300) {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const debouncedFn = useCallback(
		(...args: any[]) => {
			// Clear previous timer
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			// Start new timer
			timeoutRef.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay],
	);

	return debouncedFn;
}
