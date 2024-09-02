import React from 'react';
import HeroSlider from '../Hero-Slider/HeroSlider';
import CategoryGrid from '../Categories/Categories';
import Foods from '../Foods/Foods';
import Electronics from '../Electronics/Electronics';
import BodyHealth from '../BodyHealth/BodyHealth';
import Mackup from '../Mackup/Mackup';
import Telivision from '../Telivision/Telivision';
import Babies from '../Babies/Babies';
import Brand from '../Brand/Brand';
import { Toaster } from 'react-hot-toast';


const HomePage = () => {
    return (
        <div>
            <HeroSlider/>
            <CategoryGrid/>
            <Foods/>
            <Toaster/>
            <Electronics/>
            <BodyHealth/>
            <Mackup/>
            <Telivision/>
            <Babies/>
            <Brand/>

        </div>
    );
};

export default HomePage;