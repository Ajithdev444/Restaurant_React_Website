import React from 'react';
import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu__title'>
      <SubHeading title='Menu that fits you palatte'/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu__menu'>
      <div className='app__specialMenu__menu__wine flex__center'>
        <p className='app__specialMenu__menu__heading'>Wine & Beer</p>
        <div className='app__specialMenu__menu__items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title}
            price={wine.price}  tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className='app__specialMenu__menu__img'alt='menu_img'>
        <img src={images.menu}/>
      </div>

      <div className='app__specialMenu__menu__cocktail flex__center'>
        <p className='app__specialMenu__menu__heading'>Cocktail</p>
        <div className='app__specialMenu__menu__items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title}
             price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
            <button type='button' className='custom__button'>View More</button>
      </div>

  </div>
);

export default SpecialMenu;
