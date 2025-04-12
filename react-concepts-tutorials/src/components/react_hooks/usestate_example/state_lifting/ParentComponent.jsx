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
        <div>
            <h1>Parent Component</h1>
            {/* Display the message received from the child component */}
            <p>Message from Child: {message}</p>
            {/* Pass the callback function to the child component via props */}
            <ChildComponent onMessageChange={handleMessageChange} />
        </div>
    );
};

export default ParentComponent;
