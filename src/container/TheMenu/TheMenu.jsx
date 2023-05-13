import React, { useEffect, useState } from 'react'

import './TheMenu.css'
import { client} from '../../client';
import { MenuItemCard } from '../../components';
import { Oval } from 'react-loader-spinner';
import { Fade } from 'react-awesome-reveal';

const TheMenu = () => {

  const [menuItems, setMenuItems] = useState([]);
  const [categories, setcategories] = useState([]);
  const [selected, setSelected] = useState('all');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const query = `*[_type == 'menu']`;

    client.fetch(query).then(data => {
      setMenuItems(data);
      setcategories(["all", ...new Set(menuItems.map(item => item.category))]);
      setLoading(false)
    })
  }, [menuItems]);

  const changeSelect = (e) => {
    setSelected(e.target.textContent.toLowerCase() )
  }

  if (loading) {
    return (
      <div className='flex__center app__bg section__padding'>
        <Oval
          height={80}
          width={80}
          color="#DCCA87"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#FFFFFF"
          strokeWidth={2}
          strokeWidthSecondary={2}
          />
      </div>
    )
  }

  return (
    <div className='app__theMenu section__padding'>
      <ul className='app__filter-links' >
        {categories.map(((cat, index) => {
          return (
            <li key={`${cat}-${index}`} className={cat === selected ? 'category__active p__opensans': 'p__opensans'} onClick={changeSelect}>
              <span>{cat}</span>
            </li>
        )}))}
      </ul>
      
      <Fade>
      <div className="app__theMenu-container section__padding">
        {
          selected === 'all' ? 
          menuItems.map((item) => (
            <MenuItemCard item={item} key={item._id} />
          ))
          : menuItems.filter((item) => item.category === selected).map((item) => (
            <MenuItemCard item={item} key={item._id} />
          ))
        }
      </div>
      </Fade>
    </div>
  )
}


export default TheMenu