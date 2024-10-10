"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "@/Components/UserAuth/useAuth";
import LottieLoader from "@/Components/LottieLoader/LottieLoader";
import img from "../../../Images/Foods/fgog0100102l250.jpg";
import img1 from "../../../Images/Foods/nestle-nido-fortigrow-full-cream-milk-powder-_tin_-1kg.jpg";
import img2 from "../../../Images/Health/hbpc0300212l180.jpg";
import img3 from "../../../Images/Mackup/bio_active_lip_therapy_aloe_vera_3.2ml.jpg";
import img4 from "../../../Images/Mackup/whatsapp_image_2022-11-16_at_2.40.42_pm.jpeg";
import img5 from "../../../Images/Health/simple_kind_to_skin_hydrating_light_moisturizer_125ml.jpg";
import img6 from "../../../Images/mobile-ja-1420en.jpg";
import img7 from "../../../Images/Screenshot 2024-08-22 201447.png";
import img8 from "../../../Images/Foods/tang_jar_orange_flavor_750gm_1.jpg";

const products = [
  {
    id: 1,
    name: "কালোজিরা মধু (৫০০ গ্রাম)",
    price: 800,
    oldPrice: 1000,
    imageUrl: img,
    isOnSale: true,
    description:
      "কালোজিরা মধু প্রাকৃতিকভাবে তৈরি একটি পণ্য, যা অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ। এটি স্বাস্থ্যের জন্য উপকারী, রোগ প্রতিরোধ ক্ষমতা বাড়ায় এবং ত্বকের জন্যও ভালো। এই মধু মিষ্টি স্বাদ এবং সুশ্রী গন্ধের জন্য পরিচিত, যা প্রতিদিনের খাদ্যে ব্যবহার করা যেতে পারে। স্বাস্থ্যকর ও স্বাদযুক্ত এই মধু বিভিন্ন খাবারে এবং পানীয়তে যোগ করে বিশেষ স্বাদ বাড়াতে সাহায্য করে।",
    reviews: [
      {
        username: "JohnDoe123",
        rating: 5,
        comment:
          "এই মধু আমি সত্যিই ভালোবাসি! স্বাদ অসাধারণ এবং এটি আমার অ্যালার্জির জন্য সাহায্য করেছে।",
      },
      {
        username: "SarahK",
        rating: 4,
        comment: "শानदार পণ্য, তবে কিছুটা দামী।",
      },
    ],
  },
  {
    id: 2,
    name: "মিসরীয় মেডজুল খেজুর - ১ কেজি (বড়)",
    price: 2000,
    oldPrice: 2000,
    imageUrl: img1,
    isOnSale: false,
    description:
      "মিসরীয় মেডজুল খেজুর প্রাকৃতিকভাবে মিষ্টি এবং পুষ্টিকর, যা খাবারে শক্তি যোগাতে সহায়ক। এটি ফাইবারে সমৃদ্ধ, হজমে সাহায্য করে এবং শরীরের জন্য উপকারী নানা ভিটামিন এবং খনিজ উপাদান রয়েছে। স্ন্যাকিং বা বিভিন্ন ডিশে ব্যবহারের জন্য আদর্শ, এই খেজুরের স্বাদ ও গুণাগুণ আপনাকে সন্তুষ্ট করবে। তাজা এবং স্বাস্থ্যকর এই খেজুর আপনার খাদ্য তালিকায় একটি উপকারী সংযোজন।",
    reviews: [
      {
        username: "FoodieGal",
        rating: 5,
        comment: "এই খেজুর আমি সবচেয়ে ভালো পেয়েছি! এত মিষ্টি এবং তাজা।",
      },
      {
        username: "HealthyEater",
        rating: 4,
        comment: "ভালো মানের, তবে আমি চাইতাম তারা ছোট প্যাকেজে আসত।",
      },
    ],
  },
  {
    id: 3,
    name: "চিয়া সীড - হানি কম্ব প্যাক",
    price: 1500,
    oldPrice: 2000,
    imageUrl: img2,
    isOnSale: true,
    description:
      "চিয়া সীড অত্যন্ত পুষ্টিকর এবং ওমেগা-৩ ফ্যাটি অ্যাসিডে সমৃদ্ধ। এটি শরীরের জন্য প্রয়োজনীয় ফাইবার এবং প্রোটিন সরবরাহ করে, যা হজম এবং হৃদরোগের ঝুঁকি কমাতে সাহায্য করে। এই সীড গুলি সালাদ, স্মুদিতে বা অন্যান্য খাবারের সাথে যোগ করে খাওয়া যায়। এটি শরীরকে সতেজ রাখতে সহায়ক এবং স্বাস্থ্যের জন্য খুবই উপকারী।",
    reviews: [
      {
        username: "FitnessFan",
        rating: 5,
        comment:
          "আমি প্রতিদিন সকালে এগুলো আমার স্মুদিতে যোগ করি। অত্যন্ত সুপারিশ করছি!",
      },
      {
        username: "NutriLover",
        rating: 4,
        comment:
          "ভালো মানের সীড, তবে সেরা ফলাফলের জন্য এগুলো ভিজিয়ে রাখতে হবে।",
      },
    ],
  },
  {
    id: 4,
    name: "কালোজিরা মধু (৫০০ গ্রাম)",
    price: 800,
    oldPrice: 1000,
    imageUrl: img3,
    isOnSale: true,
    description:
      "কালোজিরা মধু প্রাকৃতিকভাবে তৈরি একটি পণ্য, যা অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ। এটি স্বাস্থ্যের জন্য উপকারী, রোগ প্রতিরোধ ক্ষমতা বাড়ায় এবং ত্বকের জন্যও ভালো। এই মধু মিষ্টি স্বাদ এবং সুশ্রী গন্ধের জন্য পরিচিত, যা প্রতিদিনের খাদ্যে ব্যবহার করা যেতে পারে। স্বাস্থ্যকর ও স্বাদযুক্ত এই মধু বিভিন্ন খাবারে এবং পানীয়তে যোগ করে বিশেষ স্বাদ বাড়াতে সাহায্য করে।",
    reviews: [
      {
        username: "HoneyLover",
        rating: 5,
        comment: "এই মধু অসাধারণ! স্বাদ এবং ধারাবাহিকতা একদম নিখুঁত।",
      },
      {
        username: "HealthyLifestyle",
        rating: 3,
        comment:
          "ভালো মধু, তবে আমি বর্ণনায় উল্লেখিত স্বাস্থ্য উপকারিতা আশা করেছিলাম।",
      },
    ],
  },
  {
    id: 5,
    name: "মিসরীয় মেডজুল খেজুর - ১ কেজি (বড়)",
    price: 2000,
    oldPrice: 2000,
    imageUrl: img4,
    isOnSale: false,
    description:
      "মিসরীয় মেডজুল খেজুর প্রাকৃতিকভাবে মিষ্টি এবং পুষ্টিকর, যা খাবারে শক্তি যোগাতে সহায়ক। এটি ফাইবারে সমৃদ্ধ, হজমে সাহায্য করে এবং শরীরের জন্য উপকারী নানা ভিটামিন এবং খনিজ উপাদান রয়েছে। স্ন্যাকিং বা বিভিন্ন ডিশে ব্যবহারের জন্য আদর্শ, এই খেজুরের স্বাদ ও গুণাগুণ আপনাকে সন্তুষ্ট করবে। তাজা এবং স্বাস্থ্যকর এই খেজুর আপনার খাদ্য তালিকায় একটি উপকারী সংযোজন।",
    reviews: [
      {
        username: "SnackQueen",
        rating: 5,
        comment: "এগুলি আমার প্রিয় স্ন্যাক! এত সুস্বাদু এবং পুষ্টিকর।",
      },
      {
        username: "HealthNut",
        rating: 4,
        comment: "শক্তির জন্য খুব ভালো, তবে আমি চাইতাম এগুলো জৈবিক হোক।",
      },
    ],
  },
  {
    id: 6,
    name: "চিয়া সীড - হানি কম্ব প্যাক",
    price: 1500,
    oldPrice: 2000,
    imageUrl: img5,
    isOnSale: true,
    description:
      "চিয়া সীড অত্যন্ত পুষ্টিকর এবং ওমেগা-৩ ফ্যাটি অ্যাসিডে সমৃদ্ধ। এটি শরীরের জন্য প্রয়োজনীয় ফাইবার এবং প্রোটিন সরবরাহ করে, যা হজম এবং হৃদরোগের ঝুঁকি কমাতে সাহায্য করে। এই সীড গুলি সালাদ, স্মুদিতে বা অন্যান্য খাবারের সাথে যোগ করে খাওয়া যায়। এটি শরীরকে সতেজ রাখতে সহায়ক এবং স্বাস্থ্যের জন্য খুবই উপকারী।",
    reviews: [
      {
        username: "SmoothieKing",
        rating: 5,
        comment: "এই চিয়া সীড আমার স্মুদিগুলোকে অনেক ভালো করে দেয়!",
      },
      {
        username: "WellnessGuru",
        rating: 4,
        comment: "ভালো সীড! তবে অংশের আকার সম্পর্কে সচেতন থাকুন।",
      },
    ],
  },
  {
    id: 7,
    name: "কালোজিরা মধু (৫০০ গ্রাম)",
    price: 800,
    oldPrice: 1000,
    imageUrl: img6,
    isOnSale: true,
    description:
      "কালোজিরা মধু প্রাকৃতিকভাবে তৈরি একটি পণ্য, যা অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ। এটি স্বাস্থ্যের জন্য উপকারী, রোগ প্রতিরোধ ক্ষমতা বাড়ায় এবং ত্বকের জন্যও ভালো। এই মধু মিষ্টি স্বাদ এবং সুশ্রী গন্ধের জন্য পরিচিত, যা প্রতিদিনের খাদ্যে ব্যবহার করা যেতে পারে। স্বাস্থ্যকর ও স্বাদযুক্ত এই মধু বিভিন্ন খাবারে এবং পানীয়তে যোগ করে বিশেষ স্বাদ বাড়াতে সাহায্য করে।",
    reviews: [
      {
        username: "OrganicLover",
        rating: 5,
        comment: "অসাধারণ মধু! আমি আরও অর্ডার করতে যাচ্ছি।",
      },
      {
        username: "HealthyChoice",
        rating: 4,
        comment: "স্বাদ ভালো, তবে দাম একটু বেশি।",
      },
    ],
  },
  {
    id: 8,
    name: "মিসরীয় মেডজুল খেজুর - ১ কেজি (বড়)",
    price: 2000,
    oldPrice: 2000,
    imageUrl: img7,
    isOnSale: false,
    description:
      "মিসরীয় মেডজুল খেজুর প্রাকৃতিকভাবে মিষ্টি এবং পুষ্টিকর, যা খাবারে শক্তি যোগাতে সহায়ক। এটি ফাইবারে সমৃদ্ধ, হজমে সাহায্য করে এবং শরীরের জন্য উপকারী নানা ভিটামিন এবং খনিজ উপাদান রয়েছে। স্ন্যাকিং বা বিভিন্ন ডিশে ব্যবহারের জন্য আদর্শ, এই খেজুরের স্বাদ ও গুণাগুণ আপনাকে সন্তুষ্ট করবে। তাজা এবং স্বাস্থ্যকর এই খেজুর আপনার খাদ্য তালিকায় একটি উপকারী সংযোজন।",
    reviews: [
      {
        username: "HealthySnacker",
        rating: 5,
        comment:
          "এই খেজুর আমার প্রিয় স্বাস্থ্যকর স্ন্যাক! এত মিষ্টি এবং সুস্বাদু।",
      },
      {
        username: "NutritiousEater",
        rating: 4,
        comment: "ভালো পণ্য, তবে আমি চাইতাম তারা জৈবিক হোক।",
      },
    ],
  },
  {
    id: 9,
    name: "চিয়া সীড - হানি কম্ব প্যাক",
    price: 1500,
    oldPrice: 2000,
    imageUrl: img8,
    isOnSale: true,
    description:
      "চিয়া সীড অত্যন্ত পুষ্টিকর এবং ওমেগা-৩ ফ্যাটি অ্যাসিডে সমৃদ্ধ। এটি শরীরের জন্য প্রয়োজনীয় ফাইবার এবং প্রোটিন সরবরাহ করে, যা হজম এবং হৃদরোগের ঝুঁকি কমাতে সাহায্য করে। এই সীড গুলি সালাদ, স্মুদিতে বা অন্যান্য খাবারের সাথে যোগ করে খাওয়া যায়। এটি শরীরকে সতেজ রাখতে সহায়ক এবং স্বাস্থ্যের জন্য খুবই উপকারী।",
    reviews: [
      {
        username: "ChiaFan",
        rating: 5,
        comment: "প্রতিদিনের স্মুদিতে চিয়া সীড যোগ করি। খুবই ভালো!",
      },
      {
        username: "NutriNerd",
        rating: 4,
        comment: "ভালো মানের সীড, তবে আমি ভিজিয়ে রেখে খেতে চাই।",
      },
    ],
  },
];

const OfferDetails: React.FC = ({ params }: any) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const email = user?.email;

  const handleCart = async (item: any) => {
    if (!email) {
      toast.error("লগইন করুন কার্টে আইটেম যোগ করার জন্য!");
      return;
    }

    try {
      const response = await axios.post(
        "https://jesha-shop-backend.vercel.app/cart",
        { item, email }
      );
      console.log("Response:", response.data);
      toast.success("কার্টে আইটেম যোগ করা সফল!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("কার্টে আইটেম যোগ করা ব্যর্থ!");
    }
  };

  const product = products.find(
    (product) => product.id === parseInt(params.id)
  );

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <LottieLoader />
      </div>
    );

  // Function to collect data and convert to JSON
  const collectProductData = () => {
    const productData = {
      id: product?.id,
      name: product?.name,
      price: product?.price,
      oldPrice: product?.oldPrice,
      isOnSale: product?.isOnSale,
      description: product?.description,
      reviews: product?.reviews,
    };

    console.log("Product Data in JSON format:", JSON.stringify(productData));
    return productData;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center mb-10">
        <div className="bg-orange-500 shadow-lg lg:w-40 rounded-xl py-2 shadow-black">
          <h1 className="text-center text-white">পণ্যের বিস্তারিত</h1>
        </div>
      </div>
      <div className="lg:flex flex-wrap justify-between items-start">
        {/* Product Image and Info */}
        <div className="lg:flex w-full">
          {/* Product Image */}
          <div className="lg:w-1/2 w-full pr-4">
            <Image
              src={product?.imageUrl || "/path-to-fallback-image.jpg"} 
              alt="পণ্য চিত্র"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          {/* Product Information */}
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-2">{product?.name}</h1>
            <div className="text-red-500 mb-4">
              ৳{product?.price}{" "}
              <span className="line-through text-gray-500">
                ৳{product?.oldPrice}
              </span>
            </div>
            <p className="text-sm mb-4">
              পণ্যের বিস্তারিত: {product?.description}
            </p>
            <button
              onClick={() => handleCart(product)}
              className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
            >
              কার্টে যোগ করুন
            </button>
          </div>
        </div>
      </div>

      {/* Product Reviews */}
      <div className="mt-8">
        <details className="mb-4">
          <summary className="cursor-pointer bg-gray-100 py-2 px-4 rounded">
            রিভিউ এবং রেটিং
          </summary>
          <div className="p-4">
            {product?.reviews && product.reviews.length > 0 ? (
              <ul className="list-disc pl-5">
                {product.reviews.map((review: any, index: any) => (
                  <li key={index} className="mb-4">
                    <p className="font-semibold">{review.username}</p>
                    <p>রেটিং: {review.rating} ⭐</p>
                    <p>মন্তব্য: {review.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>কোনো রিভিউ পাওয়া যায়নি।</p>
            )}
          </div>
        </details>
      </div>

    </div>
  );
};

export default OfferDetails;
