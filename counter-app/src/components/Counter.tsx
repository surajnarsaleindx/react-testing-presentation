import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button data-testid="decrementButton" onClick={() => setCount(count - 1)}>-</button>
      <span data-testid="count">{count}</span>
      <button data-testid="incrementButton" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
