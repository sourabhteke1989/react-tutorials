import React, { useRef, useImperativeHandle, forwardRef } from "react";

// Child component that uses useImperativeHandle to expose methods to the parent
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose methods to the parent using useImperativeHandle
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        className="border border-gray-300 rounded px-2 py-1 w-full"
      />
      {/* Child component input field */}
    </div>
  );
});

const UseImperativeHandleExample = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    // Call the focus method exposed by the child
    inputRef.current.focus();
  };

  const handleClear = () => {
    // Call the clear method exposed by the child
    inputRef.current.clear();
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">useImperativeHandle Hook Example</h2>
      <p className="mb-4 text-gray-700">
        This example demonstrates how the <code>useImperativeHandle</code> hook
        is used to expose methods from a child component to its parent. The
        parent can call methods like <code>focus</code> and <code>clear</code>{" "}
        on the child component using a <code>ref</code>.
      </p>
      <p className="mb-4 text-gray-700">
        Below is a child component <strong>CustomInput</strong> that exposes
        these methods to the parent:
      </p>
      {/* Pass the ref to the child component */}
      <CustomInput ref={inputRef} />
      <p className="mt-4 mb-2 text-gray-700">
        Use the buttons below to interact with the child component's input
        field using the methods exposed via <code>useImperativeHandle</code>.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleFocus}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Focus Input
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Input
        </button>
      </div>
    </div>
  );
};

export default UseImperativeHandleExample;
