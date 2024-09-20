"use client";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { MdAddLocation } from "react-icons/md";
import "./Header.css";
import { FaCartPlus, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import Link from "next/link";
import useAuth from "../UserAuth/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import logo from "../../Images/download-removebg-preview.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPostByEmail = async (email: any) => {
  const { data } = await axios.get(`http://localhost:5000/cart/${email}`);
  return data;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useAuth();
  const [location, setLocation] = useState<any>("");

  console.log(user, "user");

  const admin = true

  //cart data fetching
  const {
    data: product,
    error,
    isLoading,
    
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: () => fetchPostByEmail(user?.email ),
  });

  console.log(product, "cart data");

  if (loading) {
    return (
      <div>
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("email");
      toast.success("আপনি সাইন আউট করেছেন!");
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
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <GrMenu className="w-6 h-6 text-black mt-1 -ml-2" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Logo */}

              <h1 className="lg:text-md md:text-md text-md flex items-center justify-center gap-2 font-bold lg:-ml-28 ml-2">
  <button className="lg:block md:hidden hidden">
    <DropdownMenu>
      <DropdownMenuTrigger className="text-orange-600">
        {user ? (
          <Image
            width={96}
            height={96}
            className="h-8 w-8 rounded-md"
            src={user?.photoURL}
            alt="user"
          />
        ) : (
          ""
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border divide-y-2 p-2 bg-white">
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="text-md">প্রোফাইল</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-md">
          {admin && (
            <Link href="/dashboard">
              <p className="text-md">Dashboard</p>
            </Link>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </button>
  <Link href="/">
    <Image
      width={300}
      height={200}
      src={logo}
      alt="logo"
      className="lg:h-8 h-6 w-full"
    />
  </Link>
</h1>


              <div className="lg:hidden md:hidden block">
                <div className="flex justify-between ">
                  <div className="flex items-center justify-center lg:ml-5 ml-4">
                    <MdAddLocation />

                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-orange-600 ">
                        {location || "লোকেশন"}
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="border divide-y-2 p-2 bg-white">
                        <DropdownMenuLabel>স্থান</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {[
                          "ঢাকা",
                          "চট্টগ্রাম",
                          "সিলেট",
                          "রাজশাহী",
                          "খুলনা",
                          "বরিশাল",
                          "রংপুর",
                          "ময়মনসিংহ",
                        ].map((city) => (
                          <DropdownMenuItem
                            key={city}
                            className="hover:bg-orange-500 cursor-pointer"
                            onClick={() => setLocation(city)}
                          >
                            {city}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className=" ml-20 rounded-2xl ">
                    <Link href={'/cartdetails'}>
                    <div className="flex items-center  justify-around">
                      <FaCartPlus className="text-orange-500" />
                      <span>({product?.length})</span>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Search Input */}
            <div className="hidden lg:flex lg:items-center lg:gap-5">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-full lg:w-[850px] py-2 pl-10 pr-4 text-gray-900 bg-gray-200 border rounded-md dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="পণ্যের অনুসন্ধান করুন (যেমনঃ তেল, চাল, ডিম)"
                />
              </div>

              <div className="flex items-center justify-center lg:ml-5">
                <MdAddLocation />

                <DropdownMenu>
                  <DropdownMenuTrigger className="text-orange-600">
                    {location || "লোকেশন"}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border divide-y-2 p-2 bg-white">
                    <DropdownMenuLabel>স্থান</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {[
                      "ঢাকা",
                      "চট্টগ্রাম",
                      "সিলেট",
                      "রাজশাহী",
                      "খুলনা",
                      "বরিশাল",
                      "রংপুর",
                      "ময়মনসিংহ",
                    ].map((city) => (
                      <DropdownMenuItem
                        key={city}
                        className="hover:bg-orange-500 cursor-pointer"
                        onClick={() => setLocation(city)}
                      >
                        {city}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

            </div>

            {/* Desktop Login Button */}
            <div className="hidden lg:ml-20 lg:-mr-32 lg:flex items-center gap-2">
              <a className="text-orange-500" href="#">
                বাংলা
              </a>{" "}
              | <a href="/">English</a>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  <FaSignOutAlt className="mr-2" /> লগ আউট
                </button>
              ) : (
                <Link href={"/login"}>
                  <button className="text-white flex items-center hover:bg-yellow-600 hover:text-black bg-red-500 px-3 py-1 rounded-md">
                    <FaSignOutAlt  className="mr-2" /> লগ ইন
                  </button>
                </Link>
              )}
            </div>
          </div>
          <input
            type="text"
            className="w-full lg:w-[720px] lg:hidden md:hidden block py-2 pl-5 mt-1 pr-4 text-black  bg-gray-200 border rounded-md dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="পণ্যের অনুসন্ধান করুন (যেমনঃ তেল, চাল, ডিম)"
          />

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mt-4 flex flex-col z-[120] gap-4">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 bg-red-500 hover:bg-orange-500 text-white rounded-md "
                >
                  <FaSignOutAlt className="mr-2" /> লগ আউট
                </button>
              ) : (
                <Link href={"/login"}>
                  <button className="text-white flex items-center  hover:bg-yellow-600 hover:text-black bg-red-500 px-3 py-1 rounded-md">
                    <FaSignOutAlt className="mr-2" /> লগ ইন
                  </button>
                </Link>
              )}
              <div>
              {user ? (
  <div className="flex gap-2 items-center px-2 py-1 hover:bg-orange-500 bg-red-500 text-white rounded-md">
    <Image
      width={96}
      height={96}
      className="h-8 w-8 rounded-md"
      src={user?.photoURL}
      alt="user"
    />
    <p className="text-md">প্রোফাইল</p>
    {admin && (
      <Link href="/dashboard">
        <p className="text-md">Dashboard</p>
      </Link>
    )}
  </div>
) : (
  ""
)}

              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
