import React, { useState } from "react";

export default function ObjectAsStateExample() {
    // Initialize state as an object with properties 'firstName' and 'lastName'
    const [user, setUser] = useState({
        firstName: "",
        lastName: ""
    });

    // Handler to update the 'firstName' property in the state
    const handleFirstNameChange = (e) => {
        // Always use a function that accepts the previous state to avoid potential side effects
        setUser((prevUser) => ({
            ...prevUser, // Spread operator to retain other properties
            firstName: e.target.value // Update only 'firstName'
        }));
    };

    // Handler to update the 'lastName' property in the state
    const handleLastNameChange = (e) => {
        // Always use a function that accepts the previous state to avoid potential side effects
        setUser((prevUser) => ({
            ...prevUser, // Spread operator to retain other properties
            lastName: e.target.value // Update only 'lastName'
        }));
    };

    return (
        <div>
            <h2>Object as State Example</h2>
            {/* Input field to update 'firstName' */}
            <input
                type="text"
                placeholder="First Name"
                value={user.firstName} // Binding state to input value (Two-way binding)
                onChange={handleFirstNameChange} // Updating state on input change (Two-way binding)
            />
            {/* Input field to update 'lastName' */}
            <input
                type="text"
                placeholder="Last Name"
                value={user.lastName} // Binding state to input value (Two-way binding)
                onChange={handleLastNameChange} // Updating state on input change (Two-way binding)
            />
            {/* Display the updated state */}
            <p>
                Full Name: {user.firstName} {user.lastName}
            </p>
        </div>
    );
}