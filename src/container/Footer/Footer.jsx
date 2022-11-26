import React from 'react';
import { FiFacebook , FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact US</h1>
        <p className='p__opensans'>Indian Street, Fort Cochin, Kerala</p>
        <p className='p__opensans'>+91 444 111 555</p>
        <p className='p__opensans'>+91 999 777 222</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer logo'/>
        <p className='p__opensans'>"The best way to find yourself in the service of others."</p>
        <img src={images.spoon} alt='spoon' style={{ marginTop:'50px'}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>

      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>09:00 am - 08:00 pm</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>09:00 am - 05:00 pm</p>

      </div>

    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Nov 25 , Ajithdev C ,
      All Rights Reserved. </p>
    </div>
  </div>
);

export default Footer;
