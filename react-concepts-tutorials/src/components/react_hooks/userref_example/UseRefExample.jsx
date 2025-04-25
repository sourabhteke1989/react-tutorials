import React, { useRef, useState, useEffect } from 'react';

const UseRefExample = () => {
  // useRef to attach to an HTML element
  const inputRef = useRef(null);

  // useRef to retain a value across renders
  const renderCount = useRef(0);

  // State to trigger re-renders
  const [value, setValue] = useState('');

  // Increment render count on every render
  useEffect(() => {
    renderCount.current += 1;
  });

  // Handler to focus the input element using ref
  const focusInput = () => {
    // Accessing the DOM element via ref
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handler to save the input value from ref to state
  const saveInputValue = () => {
    if (inputRef.current) {
      setValue(inputRef.current.value);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">useRef Hook Example</h2>

      <div className="mb-4">
        {/* Input element with ref attached */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
          className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
        />
        <button
          onClick={focusInput}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
        >
          Focus Input
        </button>
        <button
          onClick={saveInputValue}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save
        </button>
      </div>

      {/* Displaying saved value */}
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Saved value:</span> {value}
      </p>

      {/* Displaying render count */}
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Component has rendered:</span> {renderCount.current} times.
      </p>

      {/* Explanation */}
      <ul className="list-disc list-inside text-gray-700">
        <li>
          The <code className="bg-gray-200 px-1 rounded">inputRef</code> is used to attach to the input element and
          access its properties (e.g., focusing the input).
        </li>
        <li>
          The <code className="bg-gray-200 px-1 rounded">renderCount</code> is a ref that retains its value across
          renders without causing re-renders.
        </li>
        <li>
          Refs are specific to the component instance and retain their values
          even after re-renders.
        </li>
        <li>
          Avoid accessing refs during the initial render as they are undefined
          until the DOM is mounted.
        </li>
        <li>
          Avoid using the <code className="bg-gray-200 px-1 rounded">current</code> value of a ref directly in JSX to assign values to HTML elements during rendering. 
          This is because the ref may not be mounted yet, leading to potential errors.
        </li>
      </ul>
    </div>
  );
};

export default UseRefExample;
