import React from 'react';
import './about.css';
import Aboutimg from '../../assets/avatar-2.svg';

const About = () => {
  return (
    <section className='about_container container section' id='about'>
      <h2 className='section_title'>About Me</h2>
      <div className='about_container grid'>
        <img src={Aboutimg} alt='' className='about_img' />
        <div className='about_data grid'>
          <div className='about_info'>
            <p className='about_description'>I am Marruf Mihal, Web application developer from Tampa, Florida. I have over 7 years of experince in the field of Web Application Development. Some of my key coding skills includes, React Js, Next Js, Javascript, HTML, CSS, Tailwind Css, Node Js, Express Js, MongoDB and More.</p>
            <button className='btn'><a href=''>Download Resume</a></button>
          </div>
          <div className='about_skills grid'>

            <div className='skills_data'>
              <div className='skills_titles'>
                <h3 className='skills_name'>Development</h3>
                <span className='skills_number'>95%</span>
              </div>
              <div className='skills_bar'>
                <span className='skills_percentage development'></span>
              </div>
            </div>

            <div className='skills_data'>
              <div className='skills_titles'>
                <h3 className='skills_name'>SEO/SEM</h3>
                <span className='skills_number'>90%</span>
              </div>
              <div className='skills_bar'>
                <span className='skills_percentage seo'></span>
              </div>
            </div>

            <div className='skills_data'>
              <div className='skills_titles'>
                <h3 className='skills_name'>Product Management</h3>
                <span className='skills_number'>70%</span>
              </div>
              <div className='skills_bar'>
                <span className='skills_percentage pm'></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About