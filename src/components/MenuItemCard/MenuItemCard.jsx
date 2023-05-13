import React from 'react'

import './MenuItemCard.css'
import { urlFor } from '../../client'
import SubHeading from '../SubHeading/SubHeading'

const MenuItemCard = ({ item : { name, image, price, description } }) => {
  return (
    <div className='menu-item'>
      <img src={urlFor(image)} alt="" className='photo' />
      <div className="item-info">
        <header>
          <SubHeading title={name} />
          <h4 className="price">{price}</h4>
        </header>
        <p className="item-text">{description}</p>
      </div>
    </div>
  )
}

export default MenuItemCard