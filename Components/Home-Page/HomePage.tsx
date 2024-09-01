import React from 'react';
import HeroSlider from '../Hero-Slider/HeroSlider';
import CategoryGrid from '../Categories/Categories';
import Foods from '../Foods/Foods';
import Electronics from '../Electronics/Electronics';
import BodyHealth from '../BodyHealth/BodyHealth';
import Mackup from '../Mackup/Mackup';


const HomePage = () => {
    return (
        <div>
            <HeroSlider/>
            <CategoryGrid/>
            <Foods/>
            <Electronics/>
            <BodyHealth/>
            <Mackup/>

        </div>
    );
};

export default HomePage;