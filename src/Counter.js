import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
    // Fill in code for increment here
  }
  function decrement() {
    setCount(count - 1);
    // Fill in code for decrement here
  }
  return (
    <div>
      <h2>Counter Assignment</h2>
      <p>{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}
