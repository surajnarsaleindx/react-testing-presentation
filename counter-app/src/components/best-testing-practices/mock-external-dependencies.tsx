// MyComponent.tsx
const MyComponent = () => {
    // Component implementation with API call
    return <div></div>
  };
  
import { render } from "@testing-library/react";
  // MyComponent.test.tsx
  import * as api from "../../api/index";
  
  const apiMock = jest.spyOn(api, "getData");
  apiMock.mockResolvedValueOnce({ data: "mocked data" });
  
  test("renders data from API", async () => {
    const { findByText } = render(<MyComponent />);
    const dataElement = await findByText("mocked data");
  
    expect(dataElement).toBeInTheDocument();
  });
  