import { useState } from "react";

export default function MultipleTimeStateUpdate() {
    const [number, setNumber] = useState(0);
    console.log("Component MultipleTimeStateUpdate renderedering...");
    return (
        <>
            <h1 className="text-2xl font-bold text-center my-4">{number}</h1>
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                    setNumber((prev) => prev + 1);
                    setNumber((prev) => prev + 1);
                    setNumber((prev) => prev + 1);
                    // Event if we call setNumber multiple times on button click, component will only re-render once
                    // because React batches state updates inside event handlers.
                    // React will only re-render the component once after all state updates are processed.
                    // This is an optimization to avoid unnecessary re-renders.
                }}
            >
                +3
            </button>
            <p>Event if we call setNumber multiple times, component will only re-render once</p>
            <p>because React batches state updates inside event handlers.</p>
            <p>React will only re-render the component once after all state updates are processed.</p>
            <p>This is an optimization to avoid unnecessary re-renders.</p>
        </>
    );
}