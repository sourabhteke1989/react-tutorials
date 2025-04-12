import { useState } from "react";

export default function UseStateExample() {
    // Initialize state variable 'count' with a default value of 0
    // 'setCount' is the function to update the 'count' state
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>useState Example</h1>
            {/* Explanation of how useState is used in this component */}
            <p>
                In this example, we are using the <code>useState()</code> hook to manage the state of a counter. 
                The <code>count</code> variable holds the current state value, and the <code>setCount</code> function 
                is used to update it. We initialize the state with a value of <code>0</code>, and provide buttons 
                to increment, decrement, or reset the counter by calling <code>setCount</code> with the appropriate value.
            </p>
            {/* Instruction for the user */}
            <p>Click the button to increment the counter.</p>
            {/* Display the current value of the counter */}
            <p>Count: {count}</p>
            {/* Button to increment the counter */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {/* Button to decrement the counter */}
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            {/* Button to reset the counter to 0 */}
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}