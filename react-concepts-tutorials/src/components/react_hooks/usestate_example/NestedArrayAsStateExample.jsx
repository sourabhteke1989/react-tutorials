import React, { useState } from "react";

// Initial state containing an array of objects
const initialState = [
    { id: 1, name: "John", hobbies: ["Reading", "Traveling"] },
    { id: 2, name: "Jane", hobbies: ["Cooking", "Hiking"] }
];

export default function NestedArrayAsStateExample() {
    // State to manage the nested array of objects
    const [nestedArray, setNestedArray] = useState(initialState);

    // Function to add a new hobby to a specific person
    const handleAddHobby = (id, newHobby) => {
        setNestedArray((prevArray) =>
            prevArray.map((item) =>
                item.id === id
                    ? { ...item, hobbies: [...item.hobbies, newHobby] } // Add new hobby to the hobbies array
                    : item // Keep other items unchanged
            )
        );
    };

    // Function to reset hobbies of a specific person to their initial state
    const handleClearHobbies = (id) => {
        setNestedArray((prevArray) =>
            prevArray.map((item) =>
                item.id === id
                    ? { ...item, hobbies: initialState.find((p) => p.id === id).hobbies } // Reset hobbies to initial state
                    : item // Keep other items unchanged
            )
        );
    };

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Nested Array as State Example</h2>
            {/* Render each person and their hobbies */}
            {nestedArray.map((person) => (
                <div key={person.id} className="mb-6 p-4 bg-white shadow rounded">
                    <h3 className="text-xl font-semibold">{person.name}</h3>
                    <p className="text-gray-700">Hobbies: {person.hobbies.join(", ")}</p>
                    <div className="mt-2">
                        {/* Button to add a new hobby */}
                        <button
                            onClick={() => handleAddHobby(person.id, "New Hobby")}
                            className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
                        >
                            Add Hobby
                        </button>
                        {/* Button to reset hobbies */}
                        <button
                            onClick={() => handleClearHobbies(person.id)}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}