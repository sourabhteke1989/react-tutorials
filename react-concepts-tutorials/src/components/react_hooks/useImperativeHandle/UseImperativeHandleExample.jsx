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
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
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
    <div>
      <h2>useImperativeHandle Hook Example</h2>
      <p>
        This example demonstrates how the <code>useImperativeHandle</code> hook
        is used to expose methods from a child component to its parent. The
        parent can call methods like <code>focus</code> and <code>clear</code>{" "}
        on the child component using a <code>ref</code>.
      </p>
      <p>
        Below is a child component <strong>CustomInput</strong> that exposes
        these methods to the parent:
      </p>
      {/* Pass the ref to the child component */}
      <CustomInput ref={inputRef} />
      <p>
        Use the buttons below to interact with the child component's input
        field using the methods exposed via <code>useImperativeHandle</code>.
      </p>
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleClear}>Clear Input</button>
    </div>
  );
};

export default UseImperativeHandleExample;
