// components/LottieLoader.js

import React from 'react';
import loadingAnimation from '../../app/Loader.json'; 
import Lottie from 'lottie-react';

const LottieLoader = () => {
  return (
    <div className="lg:h-[320px] lg:w-[320px] md:h-[230px] md:w-[230px] sm:h-[170px] sm:w-[170px]">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default LottieLoader;
