
import React from 'react';
import './FoodCard.css';
import testImage from '../../Bread.jpeg'
import Tag from '../../../../components/Tag/Tag.js'
import { CardSwiper } from "react-card-rotate-swiper";

// Card component with destructured props
function FoodCard({image, menuName, location, description, tags, color}) {
  const handleSwipe = (d) => {
    //fill this your callback
  };
  
  
  return (
    <>
      <CardSwiper
        onSwipe={handleSwipe}
        className={"swiper"}
        contents={
          <>
          <div className="swipeCard">
            <div className='topHalf'>
              <img src={testImage} className='imageBox' alt='imageBox'/> 
              <div className='tagBox'>
                <Tag tagType={'cuisine'} text = {'Anerr'}> </Tag>
                <Tag tagType={'price'} text = {'Jermmm'}>yo </Tag>
                <Tag tagType={'allergen'} text = {'Shammm'}>yo </Tag>
                <Tag tagType={'meal'} text = {'Tiff'}>yo </Tag>
              </div>
                
            </div>
            <div className='bottomHalf'>
            <hr className='' style={{width: '100%', background: 'linear-gradient(to bottom right, #ffcf42, #EC6F34, #E24C52, #C6427B)', height: '40px', border: '0px',}} />
              <div className='littleDiv'>
                <h1 className='menuName'>Menu Name</h1>
                <h3 className='location'>location </h3>
              </div>
                <p> Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse
                </p>
                <hr className='' style={{width: '100%', background: 'linear-gradient(to bottom right, #ffcf42, #EC6F34, #E24C52, #C6427B)', height: '40px', border: '0px',}} />
            </div>
            
          </div>
        </>
         }
      /> 
    </>
  );
};
  



export default FoodCard; 