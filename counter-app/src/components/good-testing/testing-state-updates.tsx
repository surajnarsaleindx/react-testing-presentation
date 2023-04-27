import { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button aria-label="increment" onClick={increment}>
        Increment
      </button>
      <div>{count}</div>
    </>
  );
};

// MyComponent.test.tsx
test('increments count on button click', () => {
  const { getByLabelText, getByText } = render(<MyComponent />);
  const incrementButton = getByLabelText('increment');

  fireEvent.click(incrementButton);

  expect(getByText('1')).toBeInTheDocument();
});
