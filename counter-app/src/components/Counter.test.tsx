// src/Counter.test.tsx
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments and decrements count', () => {
  const { getByText } = render(<Counter />);
  const decrementButton = getByText('-');
  const incrementButton = getByText('+');
  const count = getByText('0');

  fireEvent.click(incrementButton);
  expect(count.textContent).toBe('1');

  fireEvent.click(decrementButton);
  expect(count.textContent).toBe('0');
});
