"use client";
import Image from 'next/image';
import React from 'react';
import img0 from "../../Images/Foods/all-mobile-web2423.jpg";
import { MdSkipNext } from 'react-icons/md';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

// Define the query function
const fetchPosts = async () => {
  const { data } = await axios.get('http://localhost:5000/public/food');
  return data;
};

const Foods = () => {
  const { data: products = [], error, isLoading } = useQuery({
    queryKey: ['food'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto lg:ml-0 md:ml-0 ml-2">
      <div className="flex justify-between">
        <h1 className='lg:ml-5 font-bold text-xl md:ml-0 ml-3'>খাদ্য ও মুড়ি সামগ্রী</h1>
        <Link href={"/allfood"}>
        <p className='flex items-center justify-center hover:text-orange-500 hover:shadow hover:cursor-pointer hover:shadow-black lg:mr-10 mr-4'>সব দেখুন <MdSkipNext /></p>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:px-4 md:px-0 px-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products?.slice(0, 7).map((product: any, index: any) => (
          <div key={index} className="border w-full p-4 h-72 rounded-xl shadow-lg text-center relative">
           <Link href={`/detail/${product?._id}`}>
           <Image
              width={500}
              height={300}
              src={product?.Image} // Fallback image in case product.image is undefined
              alt={product.name || "Product Image"}
              className="w-24 h-36 mx-auto mb-4 object-cover"
            />
            <h3 className="text-sm font-semibold mb-2">{product?.Name}</h3>
            
              <p className="text-sm text-gray-500 line-through">৳ {product.Price?.Old}</p>
           
            <p className="text-lg text-red-500 font-bold">৳ {product.Price?.New}</p>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-full absolute bottom-4 right-4">+</button>
           </Link>
          </div>
        ))}
      </div>
      <div className="mt-4 lg:px-5 md:px-4 px-3">
        <Image 
          src={img0}
          alt="Foods Offer"
          className="rounded-2xl mb-3"
          layout="responsive"
          width={100}
          height={20}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Foods;
