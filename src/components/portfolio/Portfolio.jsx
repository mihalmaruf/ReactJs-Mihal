import React, { useState } from 'react';
import './portfolio.css';
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem)=> {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  }

  return (
    <section className='work container section' id='portfolio'>
      <h2 className='section_title'>Recent Works</h2>

      <div className='work_filters'>
        <span className='work_item' onClick={() => setItems(Menu)}>All</span>
        <span className='work_item' onClick={() => filterItem ('Live')}>Live Projects</span>
        <span className='work_item' onClick={() => filterItem ('React')}>React Js</span>
        <span className='work_item' onClick={() => filterItem ('Next')}>Next Js</span>
        <span className='work_item'><a href='https://codepen.io/mihal/' target="_blank">Vanilla JavaScript</a></span>
        <span className='work_item'><a href='https://github.com/mihalmaruf' target="_blank">Github Repositories</a></span>
      </div>

      <div className='work_container grid'>
        {items.map((elem)=> {
          const{id, image, title, category, url} = elem;
          return (
            <div className='work_card' key={id}>
              <div className='work_thumbnail'>
                <img src={image} alt="" className='work_img' />
                <div className='work_mask'></div>
              </div>

              <span className='work_category'>{category}</span>
              <h3 className='work_title'>{title}</h3>
              <a href={url} className='work_button'>
                <i className='icon-link work_button-icon'></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio