import React from 'react';
import HeroSlider from '../Hero-Slider/HeroSlider';
import CategoryGrid from '../Categories/Categories';
import Foods from '../Foods/Foods';
import Electronics from '../Electronics/Electronics';


const HomePage = () => {
    return (
        <div>
            <HeroSlider/>
            <CategoryGrid/>
            <Foods/>
            <Electronics/>
        </div>
    );
};

export default HomePage;