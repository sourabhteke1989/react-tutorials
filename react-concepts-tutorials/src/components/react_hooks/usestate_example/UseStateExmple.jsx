import { useState } from "react";

export default function UseStateExample() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">useState Example</h1>
            <p className="mb-4">
                In this example, we are using the <code>useState()</code> hook to manage the state of a counter.
            </p>
            <p className="text-lg font-semibold mb-4">Count: {count}</p>
            <div className="space-x-2">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => setCount(count - 1)}
                >
                    Decrement
                </button>
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    onClick={() => setCount(0)}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}