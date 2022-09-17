import React from 'react';
import './home.css';
import Me from '../../assets/mihal.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='' height='300px' className='home_img' />
        <h1 className='home_name'></h1>
        <span className='home_education'>I'm a Front-End Developer</span>
        <span>
          <HeaderSocials />
          <button className='btn'><a href='#contact'>Contact Me</a></button>
          <ScrollDown />
        </span>
      </div>
    </section>
  )
}

export default Home