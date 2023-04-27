import { useState, useEffect } from "react";
import * as api from '../../api/index'
import {  render } from "@testing-library/react";


const MyComponent = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      api.fetchData().then((response) => {
        setData(response);
      });
    }, []);
  
    return (
      <>
        {data.map((item) => (
          <div key={item.id} data-testid={`item-${item.id}`}>
            {item.name}
          </div>
        ))}
      </>
    );
  };
  
  // MyComponent.test.tsx
  test("fetches and displays data", async () => {
    const data = [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }];
    const fetchDataMock = jest.spyOn(api, "fetchData");
    fetchDataMock.mockResolvedValue(data);
  
    const { findByTestId } = render(<MyComponent />);
  
    expect(await findByTestId("item-1")).toBeInTheDocument();
    expect(await findByTestId("item-2")).toBeInTheDocument();
  });
  