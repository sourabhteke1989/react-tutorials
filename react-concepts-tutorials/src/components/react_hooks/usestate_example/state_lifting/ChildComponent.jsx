import React from 'react';

const ChildComponent = ({ onMessageChange }) => {
    // Function to handle input changes and pass the new value to the parent component
    const handleInputChange = (event) => {
        onMessageChange(event.target.value);
    };

    return (
        <div className="p-4 border rounded-md shadow-md bg-gray-100">
            <h2 className="text-lg font-semibold mb-2">Child Component</h2>
            {/* Input field to type a message, triggers the parent's callback on change */}
            <input
                type="text"
                placeholder="Type a message"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default ChildComponent;
