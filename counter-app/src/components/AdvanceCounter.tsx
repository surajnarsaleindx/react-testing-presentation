// Counter.tsx
import React, { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

const AdvanceCounter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default AdvanceCounter;
