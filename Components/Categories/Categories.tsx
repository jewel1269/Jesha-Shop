import Image from 'next/image';
import img from "../../Images/Categories/Summer24en.webp"
import img1 from "../../Images/Categories/laptops-desktops.webp"
import img2 from "../../Images/Categories/large-kitchen-appliances.webp"
import img3 from "../../Images/Categories/mobiles-tablets.webp"
import img4 from "../../Images/Categories/nov23-flash-en.webp"
import img5 from "../../Images/Categories/nov23-popular-en.webp"
import img6 from "../../Images/Categories/oil-ghee.webp"
import img7 from "../../Images/Categories/rice-foodgrain.webp"

import notice from "../../Images/Notice/static-ja-monthly-bazar-1420-450-EN.jpg"
import { MdSkipNext } from 'react-icons/md';



const categories1 =[
img, img1, img2,img3, img4, img5, img6, img7
]

const categories = [
  { title: 'Summer Collection', subtitle: 'UPTO 40% OFF', imgSrc: '../../Images/Categories/Summer24en.webp' },
  { title: 'Popular Products', imgSrc: '/images/popular-products.jpg' },
  { title: 'Flash Sale', subtitle: 'UPTO 70% OFF', imgSrc: '/images/flash-sale.jpg' },
  { title: 'Super Saver', subtitle: 'SAVE 45%', imgSrc: '/images/super-saver.jpg' },
  { title: 'চাল ও খাদ্যপণ্য', imgSrc: '/images/rice-food.jpg' },
  { title: 'রান্না সামগ্রী', imgSrc: '/images/cooking-items.jpg' },
  { title: 'বাথ ও বডি', imgSrc: '/images/bath-body.jpg' },
  { title: 'শিশুর সরঞ্জাম', imgSrc: '/images/baby-products.jpg' },
  { title: 'ডেস্কটপ ও ল্যাপটপ', imgSrc: '/images/desktop-laptop.jpg' },
  { title: 'মোবাইল ও ট্যাবলেট', imgSrc: '/images/mobile-tablet.jpg' },
  { title: 'বড় মেশিনারী', imgSrc: '/images/large-appliances.jpg' },
  { title: 'হিটিং, কুলিং ও এয়ার কন্ডিশনার', imgSrc: '/images/heating-cooling.jpg' },
];

const CategoryGrid = () => {
  return (
    <div className="lg:mr-20">
      <div>
      <div className="flex justify-between">
      <h1 className='lg:ml-5 font-bold text-xl  md:ml-0 ml-3 '>টপ ক্যাটেগরীজ</h1>
      <p className='flex items-center justify-center lg:mr-10 mr-4'>সব দেখুন <MdSkipNext />  </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 p-4">
      {categories1.map((category, index) => (
        <div key={index} className="relative group border rounded-xl overflow-hidden">
          <Image
            src={category}
            alt=''
            layout="responsive"
            width={100}
            height={40}
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {categories.map((category, index) => {
  return (
    category.subtitle && (
      <p key={index} className="text-red-500 text-sm mt-2 font-bold">
        {category.subtitle}
      </p>
    )
  );
})}


          </div>
        </div>
      ))}
      
    </div>
    <div className="mt-4 lg:px-5 md:px-4 px-3">
  <Image 
    src={notice} 
    alt="Category Offer" 
    className="rounded-2xl mb-3 " 
    layout="responsive" 
    width={100} 
    height={20} 
    objectFit="cover" 
  />
</div>

    </div>
    </div>
  );
};

export default CategoryGrid;
