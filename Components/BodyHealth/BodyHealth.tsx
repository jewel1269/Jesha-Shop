"use client"
import Image from 'next/image';
import React from 'react';
import img0 from "../../Images/Health/MAKEUP1420-en.jpg";
import { MdSkipNext } from 'react-icons/md';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../UserAuth/useAuth';


  // Define the query function for fetching health items
const fetchPosts = async () => {
  const { data } = await axios.get('http://localhost:5000/public/health');
  return data;
};
  

const BodyHealth = () => {

  const { user, loading } = useAuth();
  const email = user?.email;

  // Query for fetching all health items
  const { data: products = [], error, isLoading , refetch: refetchCart } = useQuery({
    queryKey: ['Health'],
    queryFn: fetchPosts,
  });

 


  return (
    <div className="container mx-auto lg:ml-0 md:ml-0 ml-2">
      
      <div className="flex justify-between">
      <h1 className='lg:ml-5 font-bold text-xl  md:ml-0 ml-3'>ব্যক্তিগত স্বাস্থ্য ও সুরক্ষা</h1>
      <p className='flex items-center justify-center lg:mr-10 mr-4'>সব দেখুন <MdSkipNext />  </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:px-4 md:px-0 px-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product:any, index:any) => (
          <div key={index} className="border w-full p-4 h-72 rounded-xl shadow-lg text-center relative ">
            <Image
             width={500}
              src={product?.Image}
              alt=""
              height={300}
              className="w-24 h-36 mx-auto mb-4 object-cover"
            />
            <h3 className="text-sm font-semibold mb-2">{product.Name}</h3>
            {product.Price?.Old && (
              <p className="text-sm text-gray-500 line-through">৳ {product.Price?.Old}</p>
            )}
            <p className="text-lg text-red-500 font-bold">৳ {product.Price?.New}</p>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-full absolute bottom-4 right-4">+</button>
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

export default BodyHealth;
