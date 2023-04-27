import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AdvanceCounter from "./AdvanceCounter";


import { rest } from "msw";
import { setupServer } from "msw/node";
import { waitFor } from "@testing-library/react";
import * as api from "./../api/index";


const server = setupServer(
  rest.post("/api/send-data", (_req, res, ctx) => {
    return res(ctx.json({ success: true }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe("Advance Counter", () => {
  test("renders with initial count", () => {
    const { getByText } = render(<AdvanceCounter initialCount={3} />);
    expect(getByText("3")).toBeInTheDocument();
  });

  test("increments count on + button click", () => {
    const { getByText } = render(<AdvanceCounter initialCount={3} />);
    fireEvent.click(getByText("+"));
    expect(getByText("4")).toBeInTheDocument();
  });

  test("decrements count on - button click", () => {
    const { getByText } = render(<AdvanceCounter initialCount={3} />);
    fireEvent.click(getByText("-"));
    expect(getByText("2")).toBeInTheDocument();
  });

  test("does not decrement count below 0", () => {
    const { getByText } = render(<AdvanceCounter initialCount={0} />);
    fireEvent.click(getByText("-"));
    expect(getByText("0")).toBeInTheDocument();
  });

  test("calls sendData when count reaches 5", async () => {
    const sendDataMock = jest.spyOn(api, "sendData"); // fake version of sendData
    const { getByText } = render(<AdvanceCounter initialCount={4} />);
  
    fireEvent.click(getByText("+"));
    expect(getByText("Loading...")).toBeInTheDocument();
  
    // Increase the timeout for the waitFor function
    await waitFor(() => {
      expect(sendDataMock).toHaveBeenCalledTimes(1);
      expect(sendDataMock).toHaveBeenCalledWith(5);
      expect(getByText("+")).toBeInTheDocument();
    }, { timeout: 3000 }); // You can adjust the timeout value as needed
  });
  
});

