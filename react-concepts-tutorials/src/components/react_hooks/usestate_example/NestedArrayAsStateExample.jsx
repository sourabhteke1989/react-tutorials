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
        <div>
            <h2>Nested Array as State Example</h2>
            {/* Render each person and their hobbies */}
            {nestedArray.map((person) => (
                <div key={person.id}>
                    <h3>{person.name}</h3>
                    <p>Hobbies: {person.hobbies.join(", ")}</p>
                    {/* Button to add a new hobby */}
                    <button onClick={() => handleAddHobby(person.id, "New Hobby")}>
                        Add Hobby
                    </button>
                    {/* Button to reset hobbies */}
                    <button onClick={() => handleClearHobbies(person.id)}>
                        Clear
                    </button>
                </div>
            ))}
        </div>
    );
}