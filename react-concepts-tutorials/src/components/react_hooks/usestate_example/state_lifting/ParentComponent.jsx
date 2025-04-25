import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    // State to hold the message passed from the child component
    const [message, setMessage] = useState('');

    // Function to update the state when the child component sends a new message
    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <div className="p-6 max-w-md mx-auto border rounded-md shadow-lg bg-white">
            <h1 className="text-xl font-bold mb-4">Parent Component</h1>
            {/* Display the message received from the child component */}
            <p className="mb-4 text-gray-700">
                <span className="font-medium">Message from Child:</span> {message}
            </p>
            {/* Pass the callback function to the child component via props */}
            <ChildComponent onMessageChange={handleMessageChange} />
        </div>
    );
};

export default ParentComponent;
