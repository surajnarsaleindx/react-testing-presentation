import React, { useState } from "react";
import { sendData } from "./../api/index";

interface CounterProps {
  initialCount?: number;
}

const AdvanceCounter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);

  const increment = async () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === 5) {
      setIsLoading(true);
      await sendData(newCount);
      setIsLoading(false);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment} disabled={isLoading}>
        {isLoading ? "Loading..." : "+"}
      </button>
    </div>
  );
};

export default AdvanceCounter;
