import { fireEvent, render } from '@testing-library/react';
import { useState } from 'react';

const MyComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input aria-label="text input" onChange={handleChange} value={value} />;
};

// MyComponent.test.tsx
test('updates value on change', () => {
  const { getByLabelText } = render(<MyComponent />);
  const input = getByLabelText('text input');
  fireEvent.change(input, { target: { value: 'new value' } });

  expect(input).toHaveValue('new value');
});

export default MyComponent;


/*

✅ Good: Focus on testing the externally observable behavior of the component using user-centric queries.
 This approach ensures that the test is robust and maintainable, even if the component's internal implementation changes

*/