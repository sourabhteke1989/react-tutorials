import React from 'react';

const ChildComponent = ({ onMessageChange }) => {
    // Function to handle input changes and pass the new value to the parent component
    const handleInputChange = (event) => {
        onMessageChange(event.target.value);
    };

    return (
        <div>
            <h2>Child Component</h2>
            {/* Input field to type a message, triggers the parent's callback on change */}
            <input
                type="text"
                placeholder="Type a message"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default ChildComponent;
