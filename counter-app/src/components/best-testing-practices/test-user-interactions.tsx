import { fireEvent, render } from '@testing-library/react';
import { useState } from 'react';


const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <button aria-label="toggle" onClick={handleClick}>
          Toggle
        </button>
        {isOpen && <div data-testid="content">Content</div>}
      </>
    );
  };
  
  // MyComponent.test.tsx
  test("toggles content visibility", () => {
    const { getByLabelText, getByTestId, queryByTestId } = render(
      <MyComponent />
    );
    const toggleButton = getByLabelText("toggle");
  
    fireEvent.click(toggleButton);
    expect(getByTestId("content")).toBeInTheDocument();
  
    fireEvent.click(toggleButton);
    expect(queryByTestId("content")).not.toBeInTheDocument();
  });
  