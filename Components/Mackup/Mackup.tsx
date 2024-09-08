"use client"
import Image from 'next/image';
import React from 'react';
import img0 from "../../Images/Mackup/TV-1420-web.jpg";
import { MdSkipNext } from 'react-icons/md';
import axios from 'axios';
import useAuth from '../UserAuth/useAuth';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Link from 'next/link';


// Define the query function for fetching beauty items
const fetchPosts = async () => {
  const { data } = await axios.get('http://localhost:5000/public/beauty');
  return data;
};

const Mackup = () => {

  const { user, loading } = useAuth();

  // Query for fetching all food items
  const { data: products = [], error, isLoading , refetch: refetchCart } = useQuery({
    queryKey: ['beauty'],
    queryFn: fetchPosts,
  });

  const email = user?.email;
  
  const handleCart = async (item: any) => {
    if (!email) {
      toast.error('লগইন করুন কার্টে আইটেম যোগ করার জন্য!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/cart', { item, email });
      console.log('Response:', response.data);
  
      await refetchCart(); 
  
      toast.success('কার্টে আইটেম যোগ করা সফল!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('কার্টে আইটেম যোগ করা ব্যর্থ!');
    }
  };
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="container mx-auto lg:ml-0 md:ml-0 ml-2">
      
      <div className="flex justify-between">
      <h1 className='lg:ml-5 font-bold text-xl  md:ml-0 ml-3'>রূপ ও নিত্য</h1>
      <Link href="/allbeauty">
          <p className='flex items-center justify-center hover:text-orange-500 hover:shadow hover:cursor-pointer hover:shadow-black lg:mr-10 mr-4'>
            সব দেখুন <MdSkipNext />
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:px-4 md:px-0 px-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.slice(0, 9).map((product:any, index:any) => (
          <div key={index} className="border w-full p-4 h-72 rounded-xl shadow-lg text-center relative ">
          <Link href={`/beatuty/${product?._id}`}>
          <Image
            width={500}
              src={product?.Image}
              alt={product?.Name}
              height={300}
              className="w-36 h-36 mx-auto mb-4 object-cover"
            />
            <h3 className="text-sm font-semibold mb-2">{product.Name}</h3>
            {product.Price?.Old && (
              <p className="text-sm text-gray-500 line-through">৳ {product.Price?.Old}</p>
            )}
            <p className="text-lg text-red-500 font-bold">৳ {product.Price?.New}</p>
          </Link>
            <button onClick={()=>handleCart(product)} className=" shadow-sm shadow-black  text-black px-3 hover:bg-slate-500 hover:text-red-500 hover:text-xl py-1 rounded-full absolute bottom-4 right-4">+</button>
          </div>
        ))}
      </div>
      <div className="mt-4 lg:px-5 md:px-4 px-3">
       <Link href={''}>
       <Image
          src={img0}
          alt="Foods Offer"
          className="rounded-2xl mb-3"
          layout="responsive"
          width={100}
          height={20}
          objectFit="cover"
        />
       </Link>
      </div>
    </div>
  );
};

export default Mackup;
