"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "@/Components/UserAuth/useAuth";
import LottieLoader from "@/Components/LottieLoader/LottieLoader";

const fetchPostById = async (id: any) => {
  const { data } = await axios.get(`https://jesha-shop-backend.vercel.app/public/electronics/${id}`);
  return data;
};

const ProductDetail: React.FC = ({ params }: any) => {
  const { user, loading } = useAuth();
  const email = user?.email;
  const {
    data: product,
    error,
    isLoading,
    refetch: refetchCart
  } = useQuery({
    queryKey: ["food", params.id],
    queryFn: () => fetchPostById(params.id),
  });


  const handleCart = async (item: any) => {
    if (!email) {
      toast.error('লগইন করুন কার্টে আইটেম যোগ করার জন্য!');
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


  if (isLoading) return <div className="flex justify-center items-center h-screen"><LottieLoader/></div>;;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex items-center justify-center mb-10">
        <div className="bg-orange-500 shadow-lg lg:w-40 rounded-xl  py-2 shadow-black">
          <h1 className="text-center text-white">পণ্যের বিস্তারিত</h1>
        </div>
      </div>
      <div className="lg:flex flex-wrap justify-between items-start">
        {/* Product Image and Info */}
        <div className="lg:flex w-full">
          {/* Product Image */}
          <div className="lg:w-1/2 w-full pr-4">
            <Image
              src={product?.Image}
              alt="পণ্য চিত্র"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          {/* Product Information */}
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-2">{product?.Name}</h1>
            <div className="text-red-500 mb-4">
              ৳{product?.Price?.New}{" "}
              <span className="line-through text-gray-500">
                ৳{product?.Price?.Old}
              </span>
            </div>
            <div className="text-sm mb-4">
              <p>এসকিউ: {product?.SKU}</p>
              <p>পরিমাপের একক: {product?.Unit}</p>
              <p>
                উপলব্ধতা:{" "}
                {product?.Availability.InStock ? "স্টক আছে" : "স্টক নেই"}
              </p>
            </div>
            <button onClick={()=>handleCart(product)} className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
              কার্টে যোগ করুন
            </button>
            <ul className="text-sm list-disc mt-4 pl-4">
              <li>পণ্যের ধরন: {product?.ProductType}</li>
              <li>ব্র্যান্ড: {product?.Brand}</li>
              <li>উচ্চমান: {product?.Quality}</li>
            </ul>
            <p className="text-sm mt-4">📦 {product?.DeliveryInfo}</p>
            <p className="text-sm mt-2">
              বিক্রেতা:{" "}
              <Link href="/" className="text-blue-500">
                {product?.Seller}
              </Link>
            </p>

            <p className="text-sm mt-2">
              পণ্যের বিস্তারিত: {product?.Description}
            </p>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-8">
        <details className="mb-4">
          <summary className="cursor-pointer bg-gray-100 py-2 px-4 rounded">
            আরও তথ্য
          </summary>
          <div className="p-4">
            <p>{product?.AdditionalInfo}</p>

            <p className="text-sm mt-5">
              পণ্যের বিস্তারিত: {product?.Description}
            </p>
          </div>
        </details>
        <details>
          <summary className="cursor-pointer bg-gray-100 py-2 px-4 rounded">
            রিভিউ এবং রেটিং
          </summary>
          <div className="p-4">
            {product?.Reviews && product.Reviews.length > 0 ? (
              <ul className="list-disc pl-5">
                {product.Reviews.map((review:any, index:any) => (
                  <li key={index} className="mb-4">
                    <p className="font-semibold">{review.User}</p>
                    <p>রেটিং: {review.Rating} ⭐</p>
                    <p>মন্তব্য: {review.Comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>কোনো রিভিউ পাওয়া যায়নি।</p>
            )}
          </div>
        </details>
      </div>
    </div>
  );
};

export default ProductDetail;
