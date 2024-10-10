"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import img from "../../Images/Foods/fgog0100102l250.jpg";
import img1 from "../../Images/Foods/nestle-nido-fortigrow-full-cream-milk-powder-_tin_-1kg.jpg";
import img2 from "../../Images/Health/hbpc0300212l180.jpg";
import img3 from "../../Images/Mackup/bio_active_lip_therapy_aloe_vera_3.2ml.jpg";
import img4 from "../../Images/Mackup/whatsapp_image_2022-11-16_at_2.40.42_pm.jpeg";
import img5 from "../../Images/Health/simple_kind_to_skin_hydrating_light_moisturizer_125ml.jpg";
import img6 from "../../Images/mobile-ja-1420en.jpg";
import img7 from "../../Images/Screenshot 2024-08-22 201447.png";
import img8 from "../../Images/Foods/tang_jar_orange_flavor_750gm_1.jpg";
import axios from 'axios';
import toast from 'react-hot-toast';
import useAuth from '../UserAuth/useAuth';

const products = [
  { id: 1, name: 'Black Seed Honey/কালোজিরা মধু (৫০০ গ্রাম)', price: 800, oldPrice: 1000, imageUrl: img, isOnSale: true },
  { id: 2, name: 'Egyptian Medjool Dates - 1 kg (Large)', price: 2000, oldPrice: 2000, imageUrl: img1, isOnSale: false },
  { id: 3, name: 'Chia Seeds/চিয়া সীড - Honey Comb Pack', price: 1500, oldPrice: 2000, imageUrl: img2, isOnSale: true },
  { id: 4, name: 'Bio Active Lip Therapy', price: 800, oldPrice: 1000, imageUrl: img3, isOnSale: true },
  { id: 5, name: 'Nestle Nido', price: 2000, oldPrice: 2000, imageUrl: img4, isOnSale: false },
  { id: 6, name: 'Simple Moisturizer', price: 1500, oldPrice: 2000, imageUrl: img5, isOnSale: true },
  { id: 7, name: 'Mobile', price: 800, oldPrice: 1000, imageUrl: img6, isOnSale: true },
  { id: 8, name: 'Tang Orange Jar', price: 2000, oldPrice: 2000, imageUrl: img7, isOnSale: false },
  { id: 9, name: 'Chia Seeds', price: 1500, oldPrice: 2000, imageUrl: img8, isOnSale: true },
];

const ProductInfo: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [amount, setAmount] = useState(2000);
  const { user } = useAuth();
  const email = user?.email;

  const handleCart = async (item: any) => {
    if (!email) {
      toast.error('লগইন করুন কার্টে আইটেম যোগ করার জন্য!');
      return;
    }
    try {
      const response = await axios.post('https://jesha-shop-backend.vercel.app/cart', { item, email });
      toast.success('কার্টে আইটেম যোগ করা সফল!');
    } catch (error) {
      toast.error('কার্টে আইটেম যোগ করা ব্যর্থ!');
    }
  };

  const filteredProducts = products.filter((product) => product.price <= amount);

  return (
    <div className="container mx-auto lg:-mt-12 md:mt-0 mt-4">
      {/* Header */}
      <div className="text-black rounded-xl shadow-sm shadow-black text-center py-2">
        <h1 className="text-xl font-bold">অফার</h1>
      </div>

      <div className="flex flex-col md:flex-row p-6">
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 flex items-center"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FaBars className="mr-2" />
            Filters
          </button>
        </div>

        {/* Sidebar Filters */}
        <div
          className={`w-full md:w-1/5 bg-white shadow-md p-4 rounded mb-6 md:mb-0 md:block ${isFilterOpen ? 'block' : 'hidden'}`}
        >
          <h2 className="text-lg font-bold mb-4">Filters</h2>

          {/* Price Filter */}
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-2">Price</h3>
            <input
              type="range"
              className="w-full"
              value={amount}
              onChange={(e: any) => setAmount(parseInt(e.target.value))}
              min="0"
              max="10000"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>৳{amount}</span>
              <span>৳10000</span>
            </div>
          </div>
        </div>

        {/* Product Listing */}
        <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="border rounded-lg shadow-md p-4 relative">
                {product.isOnSale && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    ON SALE
                  </span>
                )}
                <Link href={`/offer/${product.id}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="object-contain mx-auto"
                  />
                
                <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                <p className="mt-2 text-red-500 font-bold">
                  ৳{product.price}{' '}
                  <span className="line-through text-gray-500">৳{product.oldPrice}</span>
                </p>
                </Link>
                <button
                  onClick={() => handleCart(product)}
                  className="mt-4 text-black shadow-sm shadow-black px-4 py-1 rounded hover:bg-orange-600"
                >
                  Quick Add
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-2xl mt-10">Product Not Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
