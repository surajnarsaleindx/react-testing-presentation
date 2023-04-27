import { useState } from "react";
import * as api from '../../api/index'
import { fireEvent, render } from "@testing-library/react";

const MyComponent = () => {
    const [inputValue, setInputValue] = useState<number>(0);
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      api.sendData(inputValue);
      setSubmitted(true);
    };
  
    return (
      <>
        <form data-testid="form" onSubmit={handleSubmit}>
          <input data-testid="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
        {submitted && <div data-testid="submitted">Submitted</div>}
      </>
    );
  };
  
  // MyComponent.test.tsx
  test("submits form data", () => {
    const submitDataMock = jest.spyOn(api, "submitData");
  
    const { getByTestId } = render(<MyComponent />);
    const form = getByTestId("form");
    const input = getByTestId("input");
  
    fireEvent.change(input, { target: { value: "test value" } });
    fireEvent.submit(form);
  
    expect(submitDataMock).toHaveBeenCalledWith("test value");
    expect(getByTestId("submitted")).toBeInTheDocument();
  });
  


/*
❌ Bad: The test relies on `data-testid` attributes,
which integrates the implementation details of the component with the test
*/