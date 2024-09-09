"use client";
import React from 'react';
import { FaTags, FaBox, FaMobileAlt, FaLaptop } from 'react-icons/fa';
import { AiFillMedicineBox, AiFillGift } from 'react-icons/ai';
import { RiHealthBookLine } from 'react-icons/ri';
import { MdOutlineBabyChangingStation } from 'react-icons/md';
import { BsWatch } from 'react-icons/bs';
import { GiKitchenScale } from 'react-icons/gi';
import Link from 'next/link';
import "./Sidebar.css";
import useAuth from '../UserAuth/useAuth';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const pathname = usePathname();  

  // Function to determine if the current route is active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="sidebar">
      <ul className='divide-y-2'>
        <li>
          {user ? (
            <Link href="/info">
              <p className={`flex items-center ${isActive('/info') ? 'text-green-500' : ''}`}>
                <AiFillGift color="gold" /> অফার
              </p>
            </Link>
          ) : (
            <Link href="/login">
              <p className={`flex items-center ${isActive('/login') ? 'text-green-500' : ''}`}>
                <AiFillGift color="gold" /> অফার
              </p>
            </Link>
          )}
        </li>
        <li>
          <Link href="/allregular">
            <p className={`flex items-center ${isActive('/allregular') ? 'text-green-500' : ''}`}>
              <FaTags color="purple" /> নিয়মিত
            </p>
          </Link>
        </li>
        <li>
          <Link href="/allfood">
            <p className={`flex items-center ${isActive('/allfood') ? 'text-green-500' : ''}`}>
              <FaBox color="orange" /> খাদ্য ও মুদি সামগ্রী
            </p>
          </Link>
        </li>
        <li>
          <Link href="/allhealth">
            <p className={`flex items-center ${isActive('/allhealth') ? 'text-green-500' : ''}`}>
              <AiFillMedicineBox color="red" /> ব্যক্তিগত স্বাস্থ্য ও সুরক্ষা
            </p>
          </Link>
        </li>
        <li>
          <Link href="/allbeauty">
            <p className={`flex items-center ${isActive('/allbeauty') ? 'text-green-500' : ''}`}>
              <RiHealthBookLine color="blue" /> রূপ ও নিত্য
            </p>
          </Link>
        </li>
        <li>
          <Link href="/allhealth">
            <p className={`flex items-center ${isActive('/allbabycare') ? 'text-green-500' : ''}`}>
              <MdOutlineBabyChangingStation color="pink" /> মাতা ও শিশু
            </p>
          </Link>
        </li>
        <li>
          <Link href="/allelectronics">
            <p className={`flex items-center ${isActive('/allelectronics') ? 'text-green-500' : ''}`}>
              <GiKitchenScale color="teal" /> ইলেক্ট্রনিক্স ও যন্ত্রপাতি
            </p>
          </Link>
        </li>
        <li>
          <Link href="/allelectronics">
            <p className={`flex items-center ${isActive('/allelectronics') ? 'text-green-500' : ''}`}>
              <FaMobileAlt color="lightblue" /> মোবাইল , ট্যাবলেট , এডাপ্টরস ও ক্যাবলস
            </p>
          </Link>
        </li>
        <li>
          <Link href="/allbabycare">
            <p className={`flex items-center ${isActive('/allbabycare') ? 'text-green-500' : ''}`}>
              <BsWatch color="purple" /> শিশুর যত্ন
            </p>
          </Link>
        </li>
        <li>
          <Link href="/alltelivision">
            <p className={`flex items-center ${isActive('/alltelivision') ? 'text-green-500' : ''}`}>
              <FaLaptop color="cyan" /> কম্পিউটার ও আইটি
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
