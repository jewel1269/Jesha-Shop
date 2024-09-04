"use client";
import React from 'react';
import { FaTags, FaBox, FaMobileAlt, FaLaptop, FaTv, FaIndustry, FaTshirt, FaDumbbell } from 'react-icons/fa';
import { AiFillMedicineBox, AiFillGift } from 'react-icons/ai';
import { RiHealthBookLine } from 'react-icons/ri';
import { MdOutlineBabyChangingStation } from 'react-icons/md';
import { BsPhone, BsTablet, BsWatch } from 'react-icons/bs';
import { GiKitchenScale } from 'react-icons/gi';
import Link from 'next/link';
import "./Sidebar.css";
import useAuth from '../UserAuth/useAuth';

const Sidebar: React.FC = () => {

  const {user}=useAuth()

  return (
    <div className="sidebar">
      <ul className=''>
        <li>
         {
          user ?  <Link href="/info">
          <p className='flex items-center'><AiFillGift /> অফার</p>
        </Link>
        :
        <Link href="/login">
        <p className='flex items-center'><AiFillGift /> অফার</p>
      </Link>
      
         }
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><FaTags /> নিয়মিত</p>
          </Link>
        </li>
        <li>
          <Link href="/allfood">
            <p className='flex items-center'><FaBox /> খাদ্য ও মুদি সামগ্রী</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><AiFillMedicineBox /> ব্যক্তিগত স্বাস্থ্য ও সুরক্ষা</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><RiHealthBookLine /> রূপ ও নিত্য</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><MdOutlineBabyChangingStation /> মাতা ও শিশু</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><GiKitchenScale /> ইলেক্ট্রনিক্স ও যন্ত্রপাতি</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><FaMobileAlt /> মোবাইল ও আনুষাঙ্গিক</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><BsPhone /> মোবাইল ফোন</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><BsTablet /> ট্যাবলেট</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><FaTv /> রেফ্রিজারেটর</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><BsWatch /> স্মার্ট ওয়াচ</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><FaMobileAlt /> মোবাইল ফোন এডাপ্টরস ও ক্যাবলস</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><FaLaptop /> কম্পিউটার ও আইটি</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><FaIndustry /> শিল্প-কারখানার সামগ্রী</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><FaTshirt /> ফ্যাশন ও লাইফস্টাইল</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className='flex items-center'><FaDumbbell /> প্লেটস ও ফিটনেস</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
