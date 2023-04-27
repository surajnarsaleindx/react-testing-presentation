import { fireEvent, render } from '@testing-library/react';
import { useState } from 'react';
import * as api from '../../api/index'

const MyComponent = () => {
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleButtonClick = async () => {
      try {
        const response = await apiCall();
        // handle successful response
      } catch (error) {
        setErrorMessage("An error occurred.");
      }
    };
  
    return (
      <>
        <button aria-label="submit" onClick={handleButtonClick}>
          Submit
        </button>
        {errorMessage && <div data-testid="error-message">{errorMessage}</div>}
      </>
    );
  };
  
  // MyComponent.test.tsx
  test("displays error message on API error", async () => {
    const apiCallMock = jest.spyOn(api, "apiCall");
    apiCallMock.mockRejectedValueOnce(new Error("An error occurred."));
  
    const { getByLabelText, findByTestId } = render(<MyComponent />);
    const submitButton = getByLabelText("submit");
  
    fireEvent.click(submitButton);
    const errorMessage = await findByTestId("error-message");
  
    expect(errorMessage).toBeInTheDocument();
  });

function apiCall() {
    throw new Error('Function not implemented.');
}
  