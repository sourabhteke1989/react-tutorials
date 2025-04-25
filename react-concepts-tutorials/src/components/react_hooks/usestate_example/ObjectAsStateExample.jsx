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
        <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Object as State Example</h2>
            {/* Input field to update 'firstName' */}
            <input
                type="text"
                placeholder="First Name"
                value={user.firstName} // Binding state to input value (Two-way binding)
                onChange={handleFirstNameChange} // Updating state on input change (Two-way binding)
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Input field to update 'lastName' */}
            <input
                type="text"
                placeholder="Last Name"
                value={user.lastName} // Binding state to input value (Two-way binding)
                onChange={handleLastNameChange} // Updating state on input change (Two-way binding)
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Display the updated state */}
            <p className="text-gray-600">
                Full Name: <span className="font-medium">{user.firstName} {user.lastName}</span>
            </p>
        </div>
    );
}