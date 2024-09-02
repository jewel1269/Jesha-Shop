
import Image from 'next/image';
import React from 'react';
import img from "../../Images/babies/1_79.jpg";
import img1 from "../../Images/babies/1_93.jpg"
import img2 from "../../Images/babies/28_6_1.jpg"
import img3 from "../../Images/babies/50.1_2.jpg";
import img4 from "../../Images/babies/_0010_26_1_1.jpg";
import img5 from "../../Images/babies/image41299_120pcs__1.jpg";
import img6 from "../../Images/babies/pcbc02000160p50.jpg";
import img7 from "../../Images/babies/pcci0700084l100.jpg";
import img8 from "../../Images/babies/smartcare-bottle-brush-straight-in-white-background_1.jpg";
import img9 from "../../Images/babies/whatsapp_image_2024-03-10_at_12.47.14_pm.jpeg";
import img0 from "../../Images/babies/EMI-AVAILABLE-WEB.jpg";
import { MdSkipNext } from 'react-icons/md';

const products = [
    {
      "name": "বোটল & নিপল লিকুইড ক্লিন্সার, 500ml (2401)",
      "price_old": "৳ 1000",
      "price_new": "৳ 608",
      "delivery": "Express Delivery",
      "image":img
    },
    {
      "name": "জনসনস বেবি লোশন মিল্ক অ্যান্ড রাইস, 100gm",
      "price_old": "৳ 260",
      "price_new": "৳ 245",
      "delivery": "Express Delivery",
      "image": img1
    },
    {
      "name": "জনসনস বেবি মিল্ক অ্যান্ড রাইস ক্রিম, 100gm",
      "price_old": "৳ 322",
      "price_new": "৳ 312",
      "delivery": "Express Delivery",
      "image": img2
    },
    {
      "name": "মেরিল বেবি লোশন, 100ml",
      "price_old": "৳ 180",
      "price_new": "৳ 165",
      "delivery": "Express Delivery",
      "image": img3
    },
    {
      "name": "নেসলে সেরেলাক 1 রাইস উইথ মিল্ক বেবি ফুড (6 M), 300gm",
      "price_old": "৳ 400",
      "price_new": "৳ 400",
      "delivery": "Express Delivery",
      "image": img4
    },
    {
      "name": "নেসলে সেরেলাক 4 অ্যাপল কর্ন ফ্লেকস (12 M+), 350gm",
      "price_old": "৳ 470",
      "price_new": "৳ 460",
      "delivery": "Express Delivery",
      "image": img5
    },
    {
        "name": "স্মার্ট কেয়ার বটল ব্রাশ সেট",
        "price_old": "৳ 200",
        "price_new": "৳ 184",
        "delivery": "Express Delivery",
        "image": img9
      },
    {
      "name": "প্যাম্পার্স ডায়াপার্স প্যান্টস, এম সাইজ, (7-12 কেজি) 50 পিস",
      "price_old": "৳ 1870",
      "price_new": "৳ 1420",
      "delivery": "Extended Delivery",
      "image": img6
    },
    {
      "name": "পিইউআর গ্লাস ফিডিং বটল 2oz./60ml (1201)",
      "price_old": "৳ 1000",
      "price_new": "৳ 740",
      "delivery": "Express Delivery",
      "image": img7
    },
    {
      "name": "স্মার্ট কেয়ার বটল ব্রাশ সেট",
      "price_old": "৳ 200",
      "price_new": "৳ 184",
      "delivery": "Express Delivery",
      "image": img8
    }

  ]
  

const Babies = () => {
  return (
    <div className="container mx-auto lg:ml-0 md:ml-0 ml-2">
      
      <div className="flex justify-between">
      <h1 className='lg:ml-5 font-bold text-xl  md:ml-0 ml-3'>শিশুর যত্ন</h1>
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

export default Babies;
