import React, { useEffect, useState } from 'react';

import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';
import { client } from '../../client';
import { Slide } from 'react-awesome-reveal';

const SpecialMenu = () => {
  
  const [menuItems, setMenuItems] = useState([]);

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const query = `*[_type == 'today-special']`;

    client.fetch(query).then(data => {
      setMenuItems(data);
      setLoading(false);
    }).catch(error => {
      console.error(error);
    });
  
  }, []);
  
  return (
  <div className='app__specialMenu flex__center section__padding' id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_drinks flex__center">
        <Slide>
          <p className='app__specialMenu-menu_heading'>Drinks</p>
          <div className='app__specialMenu-menu_menu_items'>
            {menuItems.filter((item) => item.category === "drinks").map((drink, index) => (
              <MenuItem key={drink.name + index} title={drink.name} price={drink.price} tags={drink.description} />
            ))}
          </div>
        </Slide>
      </div>

      <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt="Menu" />
      </div>

      <div className="app__specialMenu-menu_coctails flex__center">
        <Slide direction='right'>
          <p className='app__specialMenu-menu_heading'>Desserts</p>
          
          <div className='app__specialMenu-menu_menu_items'>
            {menuItems.filter((item) => item.category === "dessert").map((dessert, index) => (
              <MenuItem key={dessert.name + index} title={dessert.name} price={dessert.price} tags={dessert.description} />
              ))}
          </div>
        </Slide>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>

  </div>
);
}
export default SpecialMenu;
