import React from 'react';
import './Chef.css';

import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper-reverse'>
        <img src={images.chef} alt='chef'/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title='Chef`s Word '/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
    
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt='quote'/>
        <p className='p__cormorant'>
            we make our delicious food for you 
            like we make for our loved ones enjoy 
            your food customers are our belief to 
            do more
        </p>
      </div>  
    </div>

    <div className='app__chef-sign'>
      <p>Kevin Luo</p>
      <p className='p__opensans' >Chef</p>
      <img src={images.sign} alt='sign'/>
    </div>

    </div>
  </div>
);

export default Chef;
