import React from 'react';
import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>AboutUs</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__'/>
        <p className='p__opensans'>we are one of the best resturants in kochi
        since 1940's we provide variety of food items we have to ten more branches 
        at abroad. we have five star facilities. The resturants ownered by AJITHDEV C </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>

      
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__'/>
        <p className='p__opensans'>we are one of the best resturants in kochi
        since 1940's we provide variety of food items we have to ten more branches 
        at abroad. we have five star facilities. The resturants ownered by AJITHDEV C </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      

    </div>
  </div>
);

export default AboutUs;
