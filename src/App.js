import React, { useEffect, useState } from 'react';

import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu, Layout } from './container';
import './App.css';
import { client } from './client';
import { Oval } from 'react-loader-spinner';

const App = () => {
  
  const [menuItems, setMenuItems] = useState([]);
  const [galleryImages, setgalleryImages] = useState([]);

  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  
  useEffect(() => {
    const query = `*[_type == 'today-special']`;

    client.fetch(query).then(data => {
      setMenuItems(data);
      setLoading1(false);
    })
    
    const galleryQuery = `*[_type == 'gallery']`;
    
    client.fetch(galleryQuery).then(data => {
      setgalleryImages(data);
      setLoading2(false);
    })
    
  }, []);

  if (loading1 && loading2) {
    return (
      <div className='loading-screen app__bg flex__center'>
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
    <div>
      <Layout>
        <Header />
        <AboutUs />
        <SpecialMenu menuItems={menuItems}/>
        <Chef />
        <Intro />
        <Laurels />
        <Gallery galleryImages={galleryImages}/>
        <FindUs />
      </Layout>
    </div>
)};

export default App;
