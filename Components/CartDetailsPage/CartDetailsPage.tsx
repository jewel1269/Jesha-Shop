"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import useAuth from '../UserAuth/useAuth';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import "./Cart.css";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import LottieLoader from '../LottieLoader/LottieLoader';



// Fetch cart items by email
const fetchPostByEmail = async (email: string) => {
  const { data } = await axios.get(`https://jesha-shop-backend.vercel.app/cart/${email}`);
  return data;
};

const CartDetailsPage: React.FC = () => {
  const { user, loading } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [deliveryCost, setDeliveryCost] = useState(0);
  const router = useRouter();

  // Open and close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Handle address submission
  const handleAddressSubmit = () => {
    closeModal();
    if (deliveryMethod === 'dhaka') {
      setDeliveryCost(100);
    } else if (deliveryMethod === 'outsideDhaka') {
      setDeliveryCost(150);
    }
  };

  // Fetch cart items with React Query
  const { data: items, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: () => fetchPostByEmail(user?.email),
    enabled: !!user?.email, // Only fetch if user email is available
  });

  // Calculate subtotal
  const subtotal = items?.reduce((total: number, item: any) => {
    const price = item?.item?.Price?.New || 0;
    const quantity = item?.Quantity || 0;
    return total + (price * quantity);
  }, 0) || 0;

  const total = subtotal + deliveryCost;

  // Handle item removal
  const handleDelete = async (id: any) => {
    try {
      const response = await axios.delete(`https://jesha-shop-backend.vercel.app/cart/${id}`);
      if (response.status === 200) {
        toast.success("আইটেম সফলভাবে মুছে ফেলা হয়েছে!");
        refetch();
      } else {
        toast.error("আইটেম মুছে ফেলা সম্ভব হয়নি।");
      }
    } catch (error) {
      toast.error("আইটেম মুছে ফেলার সময় একটি ত্রুটি ঘটেছে।");
      console.error("আইটেম মুছে ফেলার সময় ত্রুটি:", error);
    }
  };

  // Handle checkout
  const handleCheckout = async () => {
    if (!address || !deliveryMethod) {
      toast.error("অনুগ্রহ করে ঠিকানা এবং ডেলিভারি পদ্ধতি নির্বাচন করুন।");
      return;
    }
  
    try {
      const response = await axios.post('https://jesha-shop-backend.vercel.app/private/checkout', {
        user: user,
        item: items,
        address: address,
        deliveryMethod: deliveryMethod,
        total: total,
      });
  
      if (response.status === 200) {
        toast.success("চেকআউট সফল হয়েছে!");
  
        const redirectUrl = response.data?.paymentUrl;
      
  
        // Check if redirectUrl exists and is a valid URL
        if (redirectUrl && redirectUrl.startsWith('http')) {
          console.log("Redirecting to:", redirectUrl);  
          window.location.replace(redirectUrl);
        } else {
          toast.error("Invalid redirect URL");
          console.error("Invalid redirectUrl:", redirectUrl);
        }
      } else {
        toast.error("চেকআউট সফল হয়নি।");
      }
    } catch (error) {
      toast.error("চেকআউটের সময় একটি ত্রুটি ঘটেছে।");
      console.error("Checkout error:", error);
    }
  };
  

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><LottieLoader/></div>;;
  }

  if (isLoading) {
    return <p>কার্টের তথ্য লোড হচ্ছে...</p>;
  }

  if (isError) {
    return <p>কার্ট লোড করার সময় ত্রুটি: {error?.message}</p>;
  }

  return (
    <div className="lg:flex justify-between gap-4 p-6 bg-white lg:divide-x-2">
      {/* Left side - Items */}
      <div className="lg:w-2/3 w-full bg-white p-4 rounded">
        <h2 className="text-2xl font-bold mb-4">আমার কার্ট ({items?.length || 0} আইটেম)</h2>
        {items?.map((item: any, idx: number) => (
          <div key={idx} className="flex gap-4 border-b py-4">
            <Image
              width={300}
              height={250}
              src={item.item?.Image || '/placeholder-image.jpg'}
              alt={item.item?.Name || 'Product Image'}
              className="w-24 h-24 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.item?.Brand || 'Unknown Brand'}</h3>
              <p className="text-gray-600">{item.item?.Name || 'Unknown Product'}</p>
              <p className="text-sm">রঙ: {item?.item.Element?.Color || 'N/A'}</p>
              {item.item?.Price?.Old ? (
                <p className="text-sm text-red-500">
                  <del>৳{item.item.Price.Old.toFixed(2)}</del> ৳{item.item.Price.New.toFixed(2)}{' '}
                  <span className="text-green-500">
                    (আপনি সেভ করেছেন {((item.item.Price.Old - item.item.Price.New) / item.item.Price.Old * 100).toFixed(0)}%)
                  </span>
                </p>
              ) : (
                <p className="text-sm">৳{item.item.Price.New.toFixed(2)}</p>
              )}
              <div className="flex items-center gap-2 mt-2">
                <p>Unit: {item?.Quantity || 0}</p>
                <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:underline">রিমুভ</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right side - Summary */}
      <div className="lg:w-1/3 w-full bg-white p-4 rounded">
        <h3 className="text-xl font-bold mb-4">মোট</h3>

        {/* Delivery address input */}
        <div className="flex justify-between text-sm mb-2">
          <span>ডেলিভারি ঠিকানা</span>
          {!address ? (
            <button className="text-blue-500 hover:underline" onClick={openModal}>
              ঠিকানা যোগ করুন
            </button>
          ) : (
            <p>{address}</p>
          )}
        </div>

        {/* Delivery method selection */}
        {address && (
          <div className="flex justify-between text-sm mb-2">
            <span>ডেলিভারি পদ্ধতি</span>
            <span>{deliveryMethod === 'dhaka' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে'}</span>
          </div>
        )}

        {/* Subtotal */}
        <div className="flex justify-between text-sm mb-2">
          <span>সাবটোটাল</span>
          <span>৳{subtotal.toFixed(2)}</span>
        </div>

        {/* Delivery cost */}
        <div className="flex justify-between text-sm mb-2">
          <span>ডেলিভারি চার্জ</span>
          <span>৳{deliveryCost}</span>
        </div>

        {/* Total */}
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>মোট (ভ্যাট সহ)</span>
          <span>৳{total.toFixed(2)}</span>
        </div>
        <button
          className="w-full bg-orange-500 hover:bg-green-500 text-white py-2 rounded"
          onClick={handleCheckout}
        >
          চেকআউট এ যান
        </button>
      </div>

      {/* Modal for address input */}
      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[500px] p-6 rounded shadow-lg relative">
            <button className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800" onClick={closeModal}>
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">ঠিকানা যোগ করুন</h2>
            <input
              type="text"
              placeholder="ঠিকানা লিখুন"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border px-4 py-2 w-full mb-4"
            />
            <div className="flex justify-between mb-4">
              <label>
                <input
                  type="radio"
                  value="dhaka"
                  checked={deliveryMethod === 'dhaka'}
                  onChange={() => setDeliveryMethod('dhaka')}
                />
                ঢাকার ভিতরে (৳100)
              </label>
              <label>
                <input
                  type="radio"
                  value="outsideDhaka"
                  checked={deliveryMethod === 'outsideDhaka'}
                  onChange={() => setDeliveryMethod('outsideDhaka')}
                />
                ঢাকার বাইরে (৳150)
              </label>
            </div>
            <button
              className="w-full bg-green-500 text-white py-2 rounded"
              onClick={handleAddressSubmit}
            >
              ঠিকানা সেভ করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetailsPage;
