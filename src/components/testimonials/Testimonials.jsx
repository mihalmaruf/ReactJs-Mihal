import React from 'react';
import './testimonials.css';
import Image1 from '../../assets/avatar-1.svg';
import Image3 from '../../assets/avatar-3.svg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Image1,
    title: "Craig Grams",
    subtitle: "Product Manager at Ashley Furniture",
    comment:
      "Mihal was crucial to my team, and contributed significantly to the success of the company re-platforming initiative. Proactive, ambitious, committed and broad-minded perfectionist. Mihal is dedicated, self-motivated, methodical, and very capable. He showed a high level of content-management, SEO, focused technical skills and was a valuable contributor to our projects. I could always depend on him to set the best example as full stack developer at The Ultimate 3D Printing Company. Certainly someone I'd want to to have on my team.",
  },
  {
    id: 2,
    image: Image3,
    title: "Ali Dahmash",
    subtitle: "Senior Digital Marketing Strategist",
    comment:
      "I have worked with Marruff at Ultimate 3D Printing Store. He used to report to me directly. He has great understanding of web development, Shopify and is an expert in Html, CSS, Bootstrap, Materialize, WordPress, JavaScript, C#, SQL, and PHP. He has a very pleasant character and easy to work with. He is of high value and asset to any cooperation.",
  },
];

const Testimonials = () => {
  return (
    <section className='testimonials container section'>
      <h2 className='section_title'>Testimonials</h2>

      <Swiper className='testimonials_container grid'
            modules={[ Pagination ]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
      >
        {data.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className='testimonial_item' key={id}>
              <div className='thumb'>
                <img src={image} alt='' />
              </div>
              <h3 className='testimonials_title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className='comment'>{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials