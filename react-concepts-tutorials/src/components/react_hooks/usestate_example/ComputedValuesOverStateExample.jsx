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
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>
      {/* Display the computed total price */}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default ComputedValuesOverStateExample;
