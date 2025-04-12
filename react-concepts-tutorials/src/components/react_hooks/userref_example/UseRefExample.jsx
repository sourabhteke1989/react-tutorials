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
    <div>
      <h2>useRef Hook Example</h2>

      {/* Input element with ref attached */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
      />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={saveInputValue}>Save</button>

      {/* Displaying saved value */}
      <p>Saved value: {value}</p>

      {/* Displaying render count */}
      <p>Component has rendered {renderCount.current} times.</p>

      {/* Explanation */}
      <ul>
        <li>
          The <code>inputRef</code> is used to attach to the input element and
          access its properties (e.g., focusing the input).
        </li>
        <li>
          The <code>renderCount</code> is a ref that retains its value across
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
          Avoid using the <code>current</code> value of a ref directly in JSX to assign values to HTML elements during rendering. 
          This is because the ref may not be mounted yet, leading to potential errors.
        </li>
      </ul>
    </div>
  );
};

export default UseRefExample;
