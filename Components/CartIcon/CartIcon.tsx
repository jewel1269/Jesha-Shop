"use client"
import axios from 'axios';
import React from 'react';
import useAuth from '../UserAuth/useAuth';
import { useQuery } from '@tanstack/react-query';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

// For fetching cart items by email
const fetchPostByEmail = async (email: string) => {
    const { data } = await axios.get(`http://localhost:5000/cart/${email}`);
    return data;
  };
  
const CartIcon = () => {
    const { user } = useAuth();

      // Query for fetching cart items
  const { data: cartItems = [],  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: () => fetchPostByEmail(user?.email),
    enabled: !!user?.email, 
  });
    return (
       <div className="fixed mt-96 lg:block md:hidden hidden right-5 top-5 z-50">
       <Link href={"/cartdetails"}>
         <div className='flex items-center bg-orange-500 text-white py-2 px-4 rounded-xl'>
           <FaShoppingCart className="mr-2" />
           <p className='mr-2'>কার্ট</p>
           <p>({cartItems?.length || 0})</p>
         </div>
       </Link>
     </div>
    );
};

export default CartIcon;