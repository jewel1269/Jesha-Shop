
import Image from 'next/image';
import React from 'react';
import img from "../../Images/Telivision/05_7_1.jpg";
import img1 from "../../Images/Telivision/singer_32_inches_frame_less_android_tv_sle32d6100gotv_1.jpg";
import img2 from "../../Images/Telivision/singer_32_inches_frame_less_android_tv_sle32e3agotv_1.jpg";
import img3 from "../../Images/Telivision/singer_43_inches_frame_less_fhd_smart_android_tv_sle43a5000gotv_2_1.jpg";
import img4 from "../../Images/Telivision/singer_50_inches_frame_less_4k_google_tv_sle50g22gotv_1.jpg"
import img0 from "../../Images/Telivision/baby1-1420-en.jpg";
import { MdSkipNext } from 'react-icons/md';

const products = [
    {
      "name": "ডানাাজ অ্যান্ড্রয়েড 9.0 UHD স্মার্ট LED TV DZLE-50AS21X",
      "price_old": "৳ 59900",
      "price_new": "৳ 59900",
      "delivery": "Extended Delivery",
      "payment": "EMI",
      "image":img
    },
    {
      "name": "সিঙ্গার 32 ইঞ্চি ফ্রেমলেস অ্যান্ড্রয়েড TV (SLE32D6100)",
      "price_old": "৳ 25990",
      "price_new": "৳ 23990",
      "delivery": "Extended Delivery",
      "payment": "EMI",
      "image":img1
    },
    {
      "name": "সিঙ্গার 32 ইঞ্চি ফ্রেমলেস অ্যান্ড্রয়েড TV (SLE32E3AGO)",
      "price_old": "৳ 24990",
      "price_new": "৳ 23490",
      "delivery": "Extended Delivery",
      "payment": "EMI",
      "image": img2
    },
    {
      "name": "সিঙ্গার 43 ইঞ্চি ফ্রেমলেস FHD স্মার্ট অ্যান্ড্রয়েড TV",
      "price_old": "৳ 38490",
      "price_new": "৳ 35490",
      "delivery": "Extended Delivery",
      "payment": "EMI",
      "image": img3
    },
    {
      "name": "সিঙ্গার 50 ইঞ্চি ফ্রেমলেস 4K গুগল TV (SLE50G22)",
      "price_old": "৳ 60990",
      "price_new": "৳ 53490",
      "delivery": "Extended Delivery",
      "payment": "EMI",
      "image": img4
    },
    {
      "name": "সিঙ্গার 50 ইঞ্চি ফ্রেমলেস 4K গুগল TV (SLE50G22)",
      "price_old": "৳ 60990",
      "price_new": "৳ 53490",
      "delivery": "Extended Delivery",
      "payment": "EMI",
      "image": img4
    }
  ]
  

const Telivision = () => {
  return (
    <div className="container mx-auto lg:ml-0 md:ml-0 ml-2">
      
      <div className="flex justify-between">
      <h1 className='lg:ml-5 font-bold text-xl  md:ml-0 ml-3'>টেলিভিশন</h1>
      <p className='flex items-center justify-center lg:mr-10 mr-4'>সব দেখুন <MdSkipNext />  </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:px-4 md:px-0 px-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border w-full p-4 h-72 rounded-xl shadow-lg text-center relative ">
            <Image
              width={500}
              src={product?.image}
              alt=""
              height={300}
              className="w-28 h-40 mx-auto mb-4 object-cover"
            />
            <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
            {product.price_old && (
              <p className="text-sm text-gray-500 line-through">৳ {product.price_old}</p>
            )}
            <p className="text-lg text-red-500 font-bold">৳ {product.price_new}</p>
            <button className="bg-yellow-400 text-white px-3 py-1 text-xl rounded-full absolute bottom-4 right-4">+</button>
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

export default Telivision;
