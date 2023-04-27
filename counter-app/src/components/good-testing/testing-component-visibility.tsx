import { useState } from "react";
import { fireEvent, render } from "@testing-library/react";

const MyComponent = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleVisibility = () => {
      setVisible(!visible);
    };
  
    return (
      <>
        <button aria-label="toggle" onClick={toggleVisibility}>
          Toggle
        </button>
        {visible && <div>Content</div>}
      </>
    );
  };
  
  // MyComponent.test.tsx
  test("toggles content visibility", () => {
    const { getByLabelText, getByText, queryByText } = render(<MyComponent />);
    const toggleButton = getByLabelText("toggle");
  
    fireEvent.click(toggleButton);
    expect(getByText("Content")).toBeInTheDocument();
  
    fireEvent.click(toggleButton);
    expect(queryByText("Content")).not.toBeInTheDocument();
  });
  