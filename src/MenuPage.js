import React from 'react'
import { Layout, TheMenu } from './container'
import { Fade } from 'react-awesome-reveal'



const Menu = () => {
  return (
      <Layout>
        <div className='app__menu app__bg section__padding flex__center'>
          <Fade>
            <h1 className='headtext__cormorant'>Our Menu</h1>
          </Fade>
        </div>
        <TheMenu />
      </Layout>
  )
}

export default Menu



