import React, { useState } from "react";

export default function DerivedStateExample() {
  // Parent state: count
  const [count, setCount] = useState(0);

  // Derived state: isEven, calculated based on the count
  const isEven = count % 2 === 0;

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      {/* Display the current count */}
      <h1 className="text-2xl font-bold text-center mb-4">Count: {count}</h1>

      {/* Display the derived state */}
      <h2
        className={`text-xl font-medium text-center mb-4 ${
          isEven ? "text-green-500" : "text-red-500"
        }`}
      >
        The count is {isEven ? "Even" : "Odd"}
      </h2>

      {/* Buttons to increment and decrement the count */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>

      {/* Explanation of derived state */}
      <p className="text-sm text-gray-600 text-center">
        <strong>Note:</strong> The "isEven" value is derived from the "count"
        state. It is not stored separately but calculated dynamically whenever
        the component renders.
      </p>
    </div>
  );
}