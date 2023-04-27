import { useState } from "react";
import * as api from '../../api/index'
import { fireEvent, render } from "@testing-library/react";

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.submitData(inputValue);
    setSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="form input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <div>Submitted</div>}
    </>
  );
};

// MyComponent.test.tsx
test('submits form data', () => {
  const submitDataMock = jest.spyOn(api, 'submitData');

  const { getByLabelText, getByText } = render(<MyComponent />);
  const input = getByLabelText('form input');

  fireEvent.change(input, { target: { value: 'test value' } });
  fireEvent.click(getByText('Submit'));

  expect(submitDataMock).toHaveBeenCalledWith('test value');
  expect(getByText('Submitted')).toBeInTheDocument();
});


/*
✅ Good: The test uses user-centric queries like `getByLabelText` and `getByText`.
 This ensures that the test focuses on the externally behavior of the component,
which makes it more robust and maintainable.
*/