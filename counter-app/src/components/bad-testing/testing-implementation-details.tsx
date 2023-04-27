import { fireEvent, render } from '@testing-library/react';
import { useState } from 'react';

const MyComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input data-testid="input" onChange={handleChange} value={value} />;
};

// MyComponent.test.tsx
test('updates value on change', () => {
  const { getByTestId } = render(<MyComponent />);
  const input = getByTestId('input');
  fireEvent.change(input, { target: { value: 'new value' } });

  expect(input).toHaveAttribute('value', 'new value');
});

export default MyComponent;


/*

❌ Bad: Testing implementation details directly makes the test less maintainable.
 If the implementation changes but the behavior remains the same,
  the test may break unnecessarily.

*/