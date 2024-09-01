"use client"
import Image from 'next/image';
import React from 'react';
import img from "../../Images/Mackup/0935a326-0bc8-40dc-a14e-02e3b6199cff.jpg"
import img1 from "../../Images/Mackup/13b547b9-6667-4c50-8437-c9124ec2c1ef.jpg";
import img2 from "../../Images/Mackup/_0018_5.jpg";
import img3 from "../../Images/Mackup/_0019_4.jpg";
import img4 from "../../Images/Mackup/bio_active_lip_therapy_aloe_vera_3.2ml.jpg";
import img5 from "../../Images/Mackup/dabur_herbolene_aloe_petroleum_jelly_2_in_1_with_aloe_vera_and_vitamin_e_115ml.jpg";
import img6 from "../../Images/Mackup/dd58554a-bafa-4bd2-b8cb-3316544693e6.jpg";
import img7 from "../../Images/Mackup/pcma01000080g09.jpg"
import img8 from "../../Images/Mackup/whatsapp_image_2022-11-16_at_2.40.42_pm.jpeg";
import img9 from "../../Images/Mackup//whatsapp_image_2023-09-17_at_7.30.35_pm.jpeg";
import img0 from "../../Images/Mackup/TV-1420-web.jpg";
import { MdSkipNext } from 'react-icons/md';

const products = [
    {
      "image": img,
      "name": "বিউটিনা বডি লোশন অ্যালো ভেরা ও কোকোয়া বাটার, ২০০",
      "oldPrice": "৳২০০",
      "newPrice": "৳১৭২",
      "delivery": "এক্সপ্রেস ডেলিভারি"
    },
    {
      "image": img1,
      "name": "কোলগেট ভিসিবল হোয়াইট টুথপেস্ট, ২০০গ্রাম",
      "oldPrice": "৳৪৯০",
      "newPrice": "৳৪৭৫",
      "delivery": "এক্সপ্রেস ডেলিভারি"
    },
    {
      "image": img2,
      "name": "ডেটল সাবান অ্যালো ভেরা, ৭৫গ্রাম",
      "oldPrice": "৳৬০",
      "newPrice": "৳৫৫",
      "delivery": "এক্সপ্রেস ডেলিভারি"
    },
    {
      "image": img3,
      "name": "জিলেট ফিউশন প্রোগ্লাইড কুলিং শেভ জেল, ১৯৫গ্রাম",
      "oldPrice": "৳৭২৫",
      "newPrice": "৳৬৬৫",
      "delivery": "এক্সপ্রেস ডেলিভারি"
    },
    {
      "image": img4,
      "name": "হেড & শোল্ডার্স অ্যান্টি ড্যান্ড্রাফ শ্যাম্পু, ১৮০মিলি, লেমন",
      "oldPrice": "৳৩১৫",
      "newPrice": "৳২৮২",
      "delivery": "এক্সপ্রেস ডেলিভারি"
    },
    {
      "image": img5,
      "name": "লিস্টারিন মাউথ ওয়াশ অ্যাডভান্সড হোয়াইট, ৫০০মিলি (আমদানি)",
      "oldPrice": "৳১০৯৫",
      "newPrice": "৳৭৫০",
      "delivery": "এক্সপ্রেস ডেলিভারি"
    },
    {
      "image": img6,
      "name": "নিভিয়া বডি লোশন ইরেসিস্টিবলি স্মুথ, ৪০০মিলি",
      "oldPrice": "৳৯৯০",
      "newPrice": "৳৯১০",
      "delivery": "এক্সপ্রেস ডেলিভারি"
    },
    {
      "image": img7,
      "name": "স্টুডিও এক্স অ্যান্টি ড্যান্ড্রাফ শ্যাম্পু ফর মেন, ১৭৫মিলি",
      "oldPrice": "৳২৬০",
      "newPrice": "৳২৪৭",
      "delivery": "এক্সপ্রেস ডেলিভারি"
    },
    {
      "image": img8,
      "name": "সানসিল্ক শ্যাম্পু লাসিয়াসলি থিক অ্যান্ড লং, ১৭০মিলি",
      "oldPrice": "৳২৮০",
      "newPrice": "৳২৩০",
      "delivery": "এক্সপ্রেস ডেলিভারি"
    },
    {
      "image": img9,
      "name": "সিম্পল কাইন্ড টু স্কিন হাইড্রেটিং লাইট ময়েশ্চারাইজার, ১",
      "oldPrice": "৳৭০০",
      "newPrice": "৳৬৫০",
      "delivery": "স্ট্যান্ডার্ড ডেলিভারি"
    },
  
  ];
  

const Mackup = () => {
  return (
    <div className="container mx-auto lg:ml-0 md:ml-0 ml-2">
      
      <div className="flex justify-between">
      <h1 className='lg:ml-5 font-bold text-xl  md:ml-0 ml-3'>ব্যক্তিগত স্বাস্থ্য ও সুরক্ষা</h1>
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
              className="w-24 h-36 mx-auto mb-4 object-cover"
            />
            <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
            {product.oldPrice && (
              <p className="text-sm text-gray-500 line-through">৳ {product.oldPrice}</p>
            )}
            <p className="text-lg text-red-500 font-bold">৳ {product.newPrice}</p>
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

export default Mackup;
