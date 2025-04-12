import React, { useState } from "react";

export default function DerivedStateExample() {
  // Parent state: count
  const [count, setCount] = useState(0);

  // Derived state: isEven, calculated based on the count
  const isEven = count % 2 === 0;

  return (
    <div>
      {/* Display the current count */}
      <h1>Count: {count}</h1>

      {/* Display the derived state */}
      <h2>The count is {isEven ? "Even" : "Odd"}</h2>

      {/* Buttons to increment and decrement the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {/* Explanation of derived state */}
      <p>
        <strong>Note:</strong> The "isEven" value is derived from the "count"
        state. It is not stored separately but calculated dynamically whenever
        the component renders.
      </p>
    </div>
  );
}