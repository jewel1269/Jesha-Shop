"use client"
import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500 mb-4"></div>
      <h1 className="text-2xl font-bold text-blue-500 animate-pulse">Jesha Shop</h1>
    </div>
  );
};

export default Loader;
