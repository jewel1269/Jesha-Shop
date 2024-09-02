import Image from "next/image";
import React from "react";
import img from "../../Images/Brand/cat2861.jpg";
import img1 from "../../Images/Brand/cat2862.jpg";
import img2 from "../../Images/Brand/cat2863.jpg";
import img3 from "../../Images/Brand/cat2950.jpg";
import img4 from "../../Images/Brand/cat2951.jpg";
import img5 from "../../Images/Brand/cat2952.jpg";
import img6 from "../../Images/Brand/cat2954.jpg";
import img7 from "../../Images/Brand/cat2955.jpg";
import img8 from "../../Images/Brand/cat2957.jpg";
import img9 from "../../Images/Brand/cat3076.jpg";
import img10 from "../../Images/Brand/cat3093.jpg";
import { MdSkipNext } from "react-icons/md";

const products = [
  {
    image: img,
  },
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img9,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },
  {
    image: img10,
  },
];

const Brand = () => {
  return (
    <div className="container mx-auto lg:ml-0 md:ml-0 ml-2">
      <div className="flex justify-between">
        <h1 className="lg:ml-5 font-bold text-xl  md:ml-0 ml-3">টপ ব্র্যান্ডস</h1>
        <p className="flex items-center justify-center lg:mr-10 mr-4">
          সব দেখুন <MdSkipNext />{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:px-4 md:px-0 px-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border w-full p-4 h-40 rounded-xl shadow-lg text-center relative "
          >
            <Image
              width={700}
              src={product?.image}
              alt=""
              height={400}
              className="w-40 h-28 mx-auto mb-4 object-cover"
            />
           
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Brand;
