// pages/index.tsx
import Image from 'next/image';
import React from 'react';
import img from "../../Images/mobiles/mpmt01000510cac.jpg";
import img1 from "../../Images//mobiles/cat2143.jpg";
import img0 from "../../Images/mobiles/unilever-june1420.jpg";
import { MdSkipNext } from 'react-icons/md';

const products = [
  {
    image: img,
    name: 'Nokia C2 2nd Edition, RAM 2GB, ROM 32GB',
    oldPrice: '50000',
    newPrice: '46900',
  },
  {
    image: img1,
    name: 'Iphone 12 pro',
    oldPrice: '112000',
    newPrice: '109000',
  },
  
];

const Electronics = () => {
  return (
    <div className="container mx-auto lg:ml-0 md:ml-0 ml-2">
      
      <div className="flex justify-between">
      <h1 className='lg:ml-5 font-bold text-xl  md:ml-0 ml-3'>মোবাইল ও ট্যাবলেট</h1>
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

export default Electronics;
