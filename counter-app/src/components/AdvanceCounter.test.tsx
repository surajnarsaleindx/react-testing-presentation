import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AdvanceCounter from "./AdvanceCounter";

describe("Counter", () => {
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
});
