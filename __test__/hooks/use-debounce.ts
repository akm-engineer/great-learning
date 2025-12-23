import { useDebounce } from '@/hooks/use-debounce';
import { act, renderHook } from '@testing-library/react-hooks';

jest.useFakeTimers();

test('useDebounce triggers callback after delay', () => {
	const callback = jest.fn();

	const { result } = renderHook(() => useDebounce(callback, 300));

	act(() => {
		result.current('Hello');
		result.current('Hello World');
	});

	jest.advanceTimersByTime(300);

	expect(callback).toHaveBeenCalledWith('Hello World');
	expect(callback).toHaveBeenCalledTimes(1);
});
