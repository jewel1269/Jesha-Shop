// pages/index.tsx
import Image from 'next/image';
import React from 'react';
import img from "../../Images/Foods/borges_sunflower_oil_5_ltr.jpg";
import img1 from "../../Images/Foods/eggy-inastent-noodles-_masala_-720gm-gift-basket-free-2.jpg";
import img2 from "../../Images/Foods/fgog0100102l250.jpg";
import img3 from "../../Images/Foods/fgrf0200027g500.jpg";
import img4 from "../../Images/Foods/nestle-nido-fortigrow-full-cream-milk-powder-_tin_-1kg.jpg";
import img5 from "../../Images/Foods/rup-chada-5-lit.jpg";
import img6 from "../../Images/Foods/rupchanda_chinigura_1kg.jpg";
import img7 from "../../Images/Foods/rupchanda_lentil.jpg";
import img8 from "../../Images/Foods/tang_jar_orange_flavor_750gm_1.jpg";
import img9 from "../../Images/Foods/tang_orange_flavoured_instant_drink_powder_jar_2kg_1.jpg";
import img0 from "../../Images/Foods/all-mobile-web2423.jpg";
import { MdSkipNext } from 'react-icons/md';

const products = [
  {
    image: img,
    name: 'রুপচাঁদা সয়া তেল, পিইটি বোতল, ৫ লিটার',
    oldPrice: '১০১৮',
    newPrice: '৮০৩',
  },
  {
    image: img1,
    name: 'ট্যাংক জার অরেঞ্জ ফ্লেভার, ৭৫০ গ্রাম',
    oldPrice: '৭৬০',
    newPrice: '৭১০',
  },
  {
    image: img2,
    name: 'বর্জেস সানফ্লাওয়ার তেল, ৫ লিটার',
    oldPrice: '২৪৫০',
    newPrice: '২১৭০',
  },
  {
    image: img3,
    name: 'ফরচুন চানা বেসন, ৫০০ গ্রাম',
    newPrice: '১০৫',
  },
  {
    image: img4,
    name: 'ইফাদ এগি ইনস্ট্যান্ট নুডলস মসলা, ৭২০ গ্রাম (গিফট বাস্কেট)',
    oldPrice: '২৬০',
    newPrice: '২৪০',
  },
  {
    image: img5,
    name: 'নেসলে নিডো ফোর্টিগ্রো ফুল ক্রিম মিল্ক পাউডার (টিন)',
    oldPrice: '১৪০০',
    newPrice: '১৩৫০',
  },
  {
    image: img6,
    name: 'পুস্টি সরিষার তেল, ২৫০ মিলি',
    newPrice: '৭০',
  },
  {
    image: img7,
    name: 'রুপচাঁদা চিনিগুড়া, ১ কেজি',
    newPrice: '১৭০',
  },
  {
    image: img8,
    name: 'রুপচাঁদা সয়া তেল, পিইটি বোতল, ৫ লিটার',
    oldPrice: '১০১৮',
    newPrice: '৮০৩',
  },
  {
    image: img9,
    name: 'ট্যাংক অরেঞ্জ ফ্লেভার্ড ইনস্ট্যান্ট ড্রিঙ্ক পাউডার জার, ২ কেজি',
    oldPrice: '১৫০০',
    newPrice: '১৩০০',
  }
];

const Foods = () => {
  return (
    <div className="container mx-auto lg:ml-0 md:ml-0 ml-2">
      
      <div className="flex justify-between">
      <h1 className='lg:ml-5 font-bold text-xl  md:ml-0 ml-3'>খাদ্য ও মুড়ি সামগ্রী</h1>
      <p className='flex items-center justify-center lg:mr-10 mr-4'>সব দেখুন <MdSkipNext />  </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:px-4 md:px-0 px-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border w-full p-4 h-72 rounded-xl shadow-lg text-center relative ">
            <Image
            
              src={product?.image}
              alt=""
              height={40}
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

export default Foods;
