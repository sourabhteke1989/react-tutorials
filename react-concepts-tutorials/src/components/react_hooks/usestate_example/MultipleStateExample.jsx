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
        <div>
            <h2>Multiple State Example</h2>
            <p>Name : {name}, Age : {age}, City : {city}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Age: </label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>City: </label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}