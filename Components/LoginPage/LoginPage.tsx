"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';
import login from '../../Images/Login $ Regi/4498897.jpg';
import Link from 'next/link';
import { signInWithPopup } from 'firebase/auth';
import { auth, facebookProvider, googleProvider } from '../Firebase/Firebase';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data', { email, password });
      localStorage.setItem('email', email);
      console.log('Login successful:', response.data);
      
    } catch (error) {
      console.error('Login failed:', error);
    
    }
  };


  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      if(result.user){
        localStorage.setItem('email', result.user?.email);
        router.push('/')
      }
      console.log('Google login successful:', user);
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      localStorage.setItem('email', email);
      console.log('Facebook login successful:', user);
    } catch (error) {
      console.error('Facebook login failed:', error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row  bg-gray-50">
      {/* Left section with image */}
      <div className="flex w-full lg:w-1/2 justify-center items-center  p-10">
        <div className="hidden md:block w-full">
       
          <Image 
            src={login} 
            alt="Dashboard Illustration" 
            layout="responsive" 
            width={500} 
            height={400} 
            className="w-full h-96" 
          />
        </div>
      </div>
      
      {/* Right section with form */}
      <div className="flex w-full lg:w-1/2 justify-center items-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">Welcome Back</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder='Enter Your Email'
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder='Password'
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Login
              </button>
            </div>
            <div className="mt-6 flex justify-center">
              <p className="text-sm text-gray-600">Or Login with</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex gap-4 mt-4 border p-2 divide-x-2 w-44 justify-center">
                <FaGoogle onClick={handleGoogleLogin} className="cursor-pointer text-red-600" size={35} />
                <FaFacebook onClick={handleFacebookLogin} className="cursor-pointer text-blue-600" size={35} />
              </div>
            </div>
            <div className="text-center mt-6">
              <a  className="font-medium text-orange-600 hover:text-orange-500">
                Don’t have an account? <Link href={"/signup"}>
                <span className="hover:text-black">Signup</span>
                </Link>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
