import { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={increment}>Increment</button>
      <div data-testid="count">{count}</div>
    </>
  );
};

// MyComponent.test.tsx
test('increments count on button click', () => {
  const { getByText, getByTestId } = render(<MyComponent />);
  const incrementButton = getByText('Increment');

  fireEvent.click(incrementButton);

  expect(getByTestId('count')).toHaveTextContent('1');
});
