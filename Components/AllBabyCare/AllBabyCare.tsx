"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import useAuth from '../UserAuth/useAuth';
import toast from 'react-hot-toast';

const fetchData = async () => {
  const { data } = await axios.get('https://jesha-shop-backend.vercel.app/public/babycare');
  return data;
};

const AllBabyCare: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [amount, setAmount] = useState(10000); // Default max amount
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const { user } = useAuth();
  const email = user?.email;

  const { data: products = [], error, isLoading, refetch: refetchCart } = useQuery({
    queryKey: ['babycare'],
    queryFn: fetchData,
  });

  console.log(products, 'products');

  const handleCart = async (item: any) => {
    if (!email) {
      toast.error('কার্টে আইটেম যোগ করার জন্য লগইন করুন!');
      return;
    }
    try {
      const response = await axios.post('https://jesha-shop-backend.vercel.app/cart', { item, email });
      console.log('Response:', response.data);

      await refetchCart();

      toast.success('কার্টে আইটেম যোগ করা সফল!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('কার্টে আইটেম যোগ করা ব্যর্থ!');
    }
  };

  if (isLoading) return <div>লোড হচ্ছে...</div>;
  if (error) return <div>ত্রুটি: {error.message}</div>;


  // Filter products based on the state
  const filteredProducts = products
    .filter((product: any) => (inStock ? product.Availability === 'inStock' : true))
    .filter((product: any) => (outOfStock ? product.Availability === 'outOfStock' : true))
    .filter((product: any) => product.Price?.New <= amount);

  return (
    <div className="container mx-auto lg:-mt-12">
      {/* Header */}
      <div className="text-black rounded-xl shadow-sm shadow-black text-center py-2">
        <h1 className="text-xl font-bold">শিশুর যত্ন</h1>
      </div>

      <div className="flex flex-col md:flex-row p-6">
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 flex items-center"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FaBars className="mr-2" />
            ফিল্টার
          </button>
        </div>

        {/* Sidebar Filters */}
        <div
          className={`w-full md:w-1/5 bg-white shadow-md p-4 rounded mb-6 md:mb-0 md:block ${isFilterOpen ? 'block' : 'hidden'}`}
        >
          <h2 className="text-lg font-bold mb-4">ফিল্টার</h2>

          {/* Collections Filter */}
          <details className="mb-4">
            <summary className="cursor-pointer flex justify-between items-center bg-gray-100 p-2 rounded">
              ক্যাটেগরি <FaChevronDown />
            </summary>
            <div className="pl-4 mt-2">
              <Link href="/info"><p className="cursor-pointer hover:text-orange-500">অফার</p></Link>
              <Link href="/allelectronics"><p className="cursor-pointer hover:text-orange-500">ইলেকট্রনিক্স</p></Link>
              <Link href="/allfood"><p className="cursor-pointer hover:text-orange-500">খাবার</p></Link>
              <Link href="/alltelivision"><p className="cursor-pointer hover:text-orange-500">টেলিভিশন</p></Link>
              <Link href="/allbabycare"><p className="cursor-pointer hover:text-orange-500">শিশুর যত্ন</p></Link>
              <Link href="/allbeauty"><p className="cursor-pointer hover:text-orange-500">সৌন্দর্য</p></Link>
              <Link href="/allhealth"><p className="cursor-pointer hover:text-orange-500">স্বাস্থ্য</p></Link>
            </div>
          </details>

          {/* Availability Filter */}
          <details className="mb-4">
            <summary className="cursor-pointer flex justify-between items-center bg-gray-100 p-2 rounded">
              প্রাপ্যতা <FaChevronDown />
            </summary>
            <div className="pl-4 mt-2">
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={inStock}
                  onChange={() => setInStock(!inStock)}
                />
                স্টকে আছে
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={outOfStock}
                  onChange={() => setOutOfStock(!outOfStock)}
                />
                স্টক আউট
              </label>
            </div>
          </details>

          {/* Price Filter */}
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-2">মূল্য</h3>
            <input
              type="range"
              className="w-full"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              min="0"
              max="10000"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>৳{amount}</span>
              <span>৳10000.00</span>
            </div>
          </div>
        </div>

        {/* Product Listing */}
        <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 15).map((product: any) => (
            <div key={product.id} className="border rounded-lg shadow-md p-4 relative">
              <Link href={`/babycare/${product._id}`}>
                {product.isOnSale && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
                <Image
                  src={product.Image}
                  alt={product.Name}
                  width={150}
                  height={150}
                  className="object-contain mx-auto"
                />
                <h3 className="mt-4 text-lg font-semibold">{product.Name}</h3>
                <p className="mt-2 text-red-500 font-bold">
                  ৳{product.Price?.New}{' '}
                  <span className="line-through text-gray-500">৳{product.Price?.Old}</span>
                </p>
              </Link>
              <button onClick={() => handleCart(product)} className="mt-4 shadow-sm shadow-black text-black px-4 py-1 rounded hover:bg-orange-600">
                কার্টে যোগ করুন
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBabyCare;
