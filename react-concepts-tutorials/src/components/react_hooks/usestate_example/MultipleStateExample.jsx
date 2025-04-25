import React, { useState } from "react";

export default function MultipleStateExample() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Age: ${age}, City: ${city}`);
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Multiple State Example</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Age:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">City:</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}