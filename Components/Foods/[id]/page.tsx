import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img from "../../Images/Foods/all-mobile-web2423.jpg";
import { FaLongArrowAltLeft } from 'react-icons/fa';

const ProductDetail: React.FC = ({params}:any) => {
    console.log(params.id);
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-start">
        {/* Back Link */}
        <Link href="/products">
          <p className="text-gray-600 flex items-center justify-center text-xl  mb-4">
            <Link href={'/'}>
              <FaLongArrowAltLeft />
            </Link>
            পেছনে
          </p>
        </Link>

        {/* Product Image and Info */}
        <div className="flex w-full lg:w-2/3">
          {/* Product Image */}
          <div className="w-1/2 pr-4">
            <Image 
              src={img}
              alt="পণ্য চিত্র"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          {/* Product Information */}
          <div className="w-1/2">
            <h1 className="text-2xl font-bold mb-2">PUR গ্লাস ফিডিং বোতল ২ আউন্স/৬০ মিলি (১২০১)</h1>
            <div className="text-red-500 mb-4">৳৭৪০ <span className="line-through text-gray-500">৳১০০০</span></div>
            <div className="text-sm mb-4">
              <p>এসকিউ: MPBA01000100CAC</p>
              <p>পরিমাপের একক: পিস</p>
            </div>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">কার্টে যোগ করুন</button>
            <ul className="text-sm list-disc mt-4 pl-4">
              <li>পণ্যের ধরন: শিশুর বোতল</li>
              <li>ব্র্যান্ড: PUR</li>
              <li>উপাদান: বোরোসিলিকেট গ্লাস</li>
              <li>উচ্চমান</li>
            </ul>
            <p className="text-sm mt-4">📦 বর্ধিত ডেলিভারি - শনিবার ৭ই সেপ্টেম্বর</p>
            <p className="text-sm mt-2">বিক্রেতা: <a href="/" className="text-blue-500">টয় হাউস</a></p>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-8">
        <details className="mb-4">
          <summary className="cursor-pointer bg-gray-100 py-2 px-4 rounded">আরও তথ্য</summary>
          <div className="p-4">
            <p>এখানে আপনি পণ্যের আরও বিশদ তথ্য যোগ করতে পারেন...</p>
          </div>
        </details>
        <details>
          <summary className="cursor-pointer bg-gray-100 py-2 px-4 rounded">রিভিউ এবং রেটিং</summary>
          <div className="p-4">
            <p>এখানে আপনি গ্রাহকের রিভিউ এবং রেটিং যোগ করতে পারেন...</p>
          </div>
        </details>
      </div>
    </div>
  );
}

export default ProductDetail;
