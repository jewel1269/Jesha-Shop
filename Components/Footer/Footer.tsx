import React from 'react';
import Link from 'next/link';
import img from "../../Images/Payment/1a74587543fb612c9b0e.webp"
import img1 from "../../Images/Payment/1d9da3f225b6c02f5054.webp"
import img2 from "../../Images/Payment/4d888b21870e83102bdd.webp"
import img3 from "../../Images/Payment/9ce59dae244072d252aa.webp"
import img4 from "../../Images/Payment/a2f4fbac216d5e872d64.webp"
import img5 from "../../Images/Payment/be75a8768ae6bd52c2ef.webp"
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto flex flex-wrap justify-between text-gray-800">
        {/* Left Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h2 className="text-lg font-semibold mb-4">যোগাযোগ করুন</h2>
          <p className="text-yellow-500 text-lg font-bold mb-2">01684-321082</p>
          <p className="text-sm">শনি - বৃহস্পতিবার সকাল 9 AM - 9 PM</p>
          <p className="text-sm mt-4">বাড়ি ৩, রোড ৯/বি<br />
            নিকুঞ্জ-১, খিলক্ষেত<br />
            ঢাকা ১২২৯, বাংলাদেশ</p>
          <p className="text-sm mt-4">ইমেল: <a href="mailto:support@Jesha-Shop.com" className="text-blue-500">support@Jesha-Shop.com</a></p>
          <p className="text-sm mt-2">ট্রেড লাইসেন্স নং: TRAD/DNCC/028947/2022</p>
        </div>

        {/* Middle Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h2 className="text-lg font-semibold mb-4">কোম্পানি তথ্য</h2>
          <ul>
            <li><Link href="#"><p className="text-sm hover:underline">সিনবাদ সম্পর্কে</p></Link></li>
            <li><Link href="#"><p className="text-sm hover:underline">ক্যারিয়ার</p></Link></li>
            <li><Link href="#"><p className="text-sm hover:underline">ব্লগ</p></Link></li>
            <li><Link href="#"><p className="text-sm hover:underline">যোগাযোগ করুন</p></Link></li>
            <li><Link href="#"><p className="text-sm hover:underline">আমাদের ঠিকানা</p></Link></li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h2 className="text-lg font-semibold mb-4">নীতি</h2>
          <ul>
            <li><Link href="#"><p className="text-sm hover:underline">ফেরত / বাতিল করুন</p></Link></li>
            <li><Link href="#"><p className="text-sm hover:underline">ক্রেডিট পলিসি</p></Link></li>
            <li><Link href="#"><p className="text-sm hover:underline">সুখরক্ষ মণিমালা</p></Link></li>
            <li><Link href="#"><p className="text-sm hover:underline">শর্তাবলী</p></Link></li>
            <li><Link href="#"><p className="text-sm hover:underline">কপিরাইট</p></Link></li>
          </ul>
        </div>

        {/* Payment Options Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h2 className="text-lg font-semibold mb-4">পেমেন্ট অপশন</h2>
          <div className="flex flex-wrap items-center">
           <div className="flex">
           <Image width={300} height={200} src={img} alt="bKash" className="h-8 w-20 mr-2 mb-2" />
           <Image width={300} height={200} src={img1} alt="Nagad" className="h-8 mr-2 w-20 mb-2" />
           </div>
            <div className="flex">
            <Image width={300} height={200} src={img2} alt="Visa" className="h-8 mr-2 w-20 mb-2" />
            <Image width={300} height={200} src={img3} alt="Mastercard" className="h-8 mr-2 w-20 mb-2" />
            </div>
            <div className="flex">
            <Image width={300} height={200} src={img4} alt="Amex" className="h-8 mr-2 w-20 mb-2" />
            <Image width={300} height={200} src={img5} alt="DBBL" className="h-8 mb-2 w-20"  />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-600">
        <div className="mb-4 flex justify-center">
              <Link href="#">
                <p className="inline-block mx-2 text-gray-600 hover:text-blue-600">
                  <FaFacebookF className="h-6 w-6" />
                </p>
              </Link>
              <Link href="#">
                <p className="inline-block mx-2 text-gray-600 hover:text-blue-600">
                  <FaLinkedinIn className="h-6 w-6" />
                </p>
              </Link>
            </div>
          <p className="text-sm">Copyright © 2024 - Jesha Shop.com Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
