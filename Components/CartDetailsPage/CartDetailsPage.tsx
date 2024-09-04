
import React, { useState } from 'react';

const CartDetailsPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fifa 19',
      image: '/fifa19.jpg',
      platform: 'PS4',
      quantity: 2,
      price: 44.00,
    },
    {

      id: 2,
      name: 'Glacier White 500GB',
      image: '/glacier-white.jpg',
      platform: 'PS4',
      quantity: 1,
      price: 249.99,
    },
    {
      id: 3,
      name: 'Platinum Headset',
      image: '/platinum-headset.jpg',
      platform: 'PS4',
      quantity: 1,
      price: 119.99,
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const shippingCost = 5.00;
  const totalCost = subtotal + shippingCost;

  return (
    <div className="shopping-cart">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        <p>{totalItems} Items</p>
        <div className="cart-item-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>{item.platform}</p>
                <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                <p>£{item.price.toFixed(2)}</p>
                <p>£{(item.price * item.quantity).toFixed(2)}</p>
                <a href="#">Remove</a>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="continue-shopping">← Continue Shopping</a>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-details">
          <p>Items {totalItems}</p>
          <p>£{subtotal.toFixed(2)}</p>
        </div>
        <div className="summary-details">
          <p>Shipping</p>
          <p>£{shippingCost.toFixed(2)}</p>
        </div>
        <div className="promo-code">
          <input type="text" placeholder="Enter your code" />
          <button>Apply</button>
        </div>
        <div className="total-cost">
          <p>Total Cost</p>
          <p>£{totalCost.toFixed(2)}</p>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
      <style jsx>{`
        .shopping-cart {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          background-color: #f9f9f9;
        }
        .cart-items, .order-summary {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .cart-items {
          width: 65%;
        }
        .order-summary {
          width: 30%;
          padding: 40px 20px;
        }
        .cart-item-list {
          margin-top: 20px;
        }
        .cart-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .cart-item img {
          width: 60px;
          height: auto;
          margin-right: 20px;
        }
        .item-details h4, .item-details p {
          margin: 5px 0;
        }
        .item-details button {
          width: 25px;
          height: 25px;
          background: #ddd;
          border: none;
          cursor: pointer;
          margin: 0 10px;
          border-radius: 4px;
        }
        .continue-shopping {
          display: block;
          margin-top: 20px;
          text-decoration: none;
          color: #555;
        }
        .order-summary h3 {
          margin-bottom: 20px;
        }
        .summary-details {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .promo-code input {
          width: calc(100% - 60px);
          padding: 10px;
          margin-right: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .promo-code button {
          padding: 10px 20px;
          background: #555;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .total-cost {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-top: 20px;
          font-size: 18px;
        }
        .checkout-button {
          width: 100%;
          padding: 15px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default CartDetailsPage;
