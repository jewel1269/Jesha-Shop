"use client";
import { useState } from 'react';
import { GrMenu } from 'react-icons/gr';
import { MdAddLocation } from 'react-icons/md';
import "./Header.css";
import { FaCartPlus, FaSignOutAlt } from 'react-icons/fa';
import { TfiMenu } from 'react-icons/tfi';
import Link from 'next/link';
import useAuth from '../UserAuth/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }
 
    const handleLogout = async () => {
        try {
          await signOut(auth);
          localStorage.removeItem('email');
          alert("আপনি সাইন আউট করেছেন।"); // Bengali message for successful logout
        } catch (error) {
          console.error("সাইন আউট করার সময় ত্রুটি:", error);
          alert("সাইন আউট করার সময় একটি ত্রুটি ঘটেছে।");
        }
      };

    return (
        <div>
            <nav className="bg-white fixed top-0 left-0 w-full z-[1000] shadow-md ">
                <div className="container px-6 py-3 mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center ">
                            {/* Menu Icon (visible on mobile) */}
                            <div className="lg:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    {!isOpen ? (
                                        <GrMenu className="w-6 h-6 text-black mt-1 -ml-2" />
                                        
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {/* Logo */}
                           
                           
                            <h1 className="lg:text-xl md:text-xl lg:-ml-28 text-xl flex items-center justify-center gap-2 font-bold ml-2"> <button className="lg:block md:hidden hidden"> <TfiMenu  /></button> <Link href={'/'}><span>Omi Shop</span></Link></h1>
                           
                                        <div className="lg:hidden md:hidden block">
                                        <div className="flex justify-between ">
                                        <div className="flex items-center ml-3 justify-between">
                                <MdAddLocation />
                                <button className="text-orange-500 text-xs mt-1 ml-2">
                                    স্থানে নির্বাচন করুন
                                </button>
                            </div>

                            <div className=' bg-yellow-600 ml-16 rounded-2xl p-1'>
                            <div className="flex items-center  justify-around">
                            <FaCartPlus className='text-white' />
                            <span>0</span>
                            </div>
                            </div>
                                        </div>
                                        </div>

                                        
                        </div>



                        {/* Desktop Search Input */}
                        <div className="hidden lg:flex lg:items-center lg:gap-5">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                                <input type="text" className="w-full lg:w-[850px] py-2 pl-10 pr-4 text-gray-900 bg-gray-200 border rounded-md dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="পণ্যের অনুসন্ধান করুন (যেমনঃ তেল, চাল, ডিম)" />
                            </div>

                            <div className="flex items-center justify-center lg:ml-5">
                                <MdAddLocation />
                                <button className="text-orange-500 ml-2">
                                    স্থানে নির্বাচন করুন
                                </button>
                            </div>
                        </div>

                        {/* Desktop Login Button */}
                        <div className="hidden lg:ml-20 lg:-mr-32 lg:flex items-center gap-2">
                            <a className="text-orange-500" href="#">বাংলা</a> | <a href="#">English</a>
                           {
                            user? 
                            <button
  onClick={handleLogout}
  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
>
  <FaSignOutAlt className="mr-2" /> লগ আউট
</button>
                           
                            :
                            <Link href={"/login"}>
                            <button className="text-white flex items-center hover:bg-yellow-600 hover:text-black bg-red-500 px-3 py-1 rounded-md">
                            <FaSignOutAlt className="mr-2" />  লগ ইন
                            </button>
                            </Link>
                           }
                        </div>
                    </div>
                    <input type="text" className="w-full lg:w-[720px] lg:hidden md:hidden block py-2 pl-5 mt-1 pr-4 text-black  bg-gray-200 border rounded-md dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="পণ্যের অনুসন্ধান করুন (যেমনঃ তেল, চাল, ডিম)" />


                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="lg:hidden mt-4 flex flex-col z-[120] gap-4">
                           
                           {
                            user? 
                            <button
  onClick={handleLogout}
  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
>
  <FaSignOutAlt className="mr-2" /> লগ আউট
</button>
                           
                            :
                            <Link href={"/login"}>
                            <button className="text-white flex items-center hover:bg-yellow-600 hover:text-black bg-red-500 px-3 py-1 rounded-md">
                            <FaSignOutAlt className="mr-2" />  লগ ইন
                            </button>
                            </Link>
                           }
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
