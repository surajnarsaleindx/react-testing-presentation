import { useState } from "react";
import { fireEvent, render } from "@testing-library/react";

const MyComponent = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleVisibility = () => {
      setVisible(!visible);
    };
  
    return (
      <>
        <button onClick={toggleVisibility}>Toggle</button>
        {visible && <div data-testid="content">Content</div>}
      </>
    );
  };
  
  // MyComponent.test.tsx
  test("toggles content visibility", () => {
    const { getByText, getByTestId, queryByTestId } = render(<MyComponent />);
    const toggleButton = getByText("Toggle");
  
    fireEvent.click(toggleButton);
    expect(getByTestId("content")).toBeInTheDocument();
  
    fireEvent.click(toggleButton);
    expect(queryByTestId("content")).not.toBeInTheDocument();
  });
  
