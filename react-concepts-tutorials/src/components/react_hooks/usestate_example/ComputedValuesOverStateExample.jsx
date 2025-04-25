import React, { useState } from "react";

const ComputedValuesOverStateExample = () => {
  // State to manage the cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Apple", price: 1.5, quantity: 2 },
    { id: 2, name: "Banana", price: 1.0, quantity: 3 },
    { id: 3, name: "Orange", price: 2.0, quantity: 1 },
  ]);

  // Computed value: Calculate the total price dynamically
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Function to update the quantity of an item
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded shadow"
          >
            <span className="font-medium">
              {item.name} - ${item.price} x {item.quantity}
            </span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="w-16 p-1 border rounded"
            />
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-6">
        Total Price: ${totalPrice.toFixed(2)}
      </h3>
    </div>
  );
};

export default ComputedValuesOverStateExample;
