"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const CartDetailsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Some name of item goes here nice',
      size: 'XL',
      color: 'blue',
      brand: 'Gucci',
      price: 1156.00,
      imgSrc: '/path/to/image1.png', // Replace with actual image path
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product name goes here nice',
      size: 'XL',
      color: 'blue',
      brand: 'Gucci',
      price: 149.97,
      imgSrc: '/path/to/image2.png',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Another name of some product goes just here',
      size: 'XL',
      color: 'blue',
      brand: 'Tissot',
      price: 98.00,
      imgSrc: '/path/to/image3.png',
      quantity: 1,
    },
  ]);

  const handleRemove = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const discount = 658.00; // Example discount value
  const finalPrice = totalPrice - discount;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1">
          {products.map(product => (
            <div key={product.id} className="flex items-center mb-4">
              <Image width={300} height={250} src={product.imgSrc} alt={product.name} className="w-20 h-20 mr-4" />
              <div className="flex-1">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-sm text-gray-500">Size: {product.size}, Color: {product.color}, Brand: {product.brand}</p>
                <div className="flex items-center mt-2">
                  <select
                    value={product.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      setProducts(products.map(p =>
                        p.id === product.id ? { ...p, quantity: newQuantity } : p
                      ));
                    }}
                    className="border border-gray-300 rounded-md mr-2 p-1"
                  >
                    {/* {[...Array(10).keys()].map(n => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))} */}
                  </select>
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="text-blue-600 hover:underline">Continue shopping</button>
        </div>
        <div className="flex-none w-full md:w-64 mt-6 md:mt-0">
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="mb-2">Total price: <b>USD {totalPrice.toFixed(2)}</b></p>
            <p className="mb-2">Discount: <b>USD {discount.toFixed(2)}</b></p>
            <p className="text-xl font-bold mb-4">Total: USD {finalPrice.toFixed(2)}</p>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="border border-gray-300 rounded-md p-2 w-2/3"
              />
              <button className="ml-2 p-2 bg-blue-600 text-white rounded-md">Apply</button>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Make Purchase</button>
          </div>
        </div>
      </div>
      <div className="bg-green-100 p-4 mt-6 rounded-md text-center">
        Free Delivery within 1-2 weeks
      </div>
    </div>
  );
};

export default CartDetailsPage;
