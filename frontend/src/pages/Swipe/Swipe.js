import React from 'react'
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import './Swipe.css'
import './components/FoodCard/FoodCard.js'
import FoodCard from './components/FoodCard/FoodCard.js';



  
export default function Swipe() {

  const arr = [
    {
      image: '1',
      menuName: '2',
      location: '3',
      description: '4',
      tags: '5',
      color: '6',
    },
    {
      image: '7',
      menuName: '8',
      location: '9',
      description: '10',
      tags: '11',
      color: '12',
    },
  ]

  return (
      <>
        <Header/>
        <div className='swipe-page-layout'>
            <h1 className='heading'>Swipe<span>Ripe</span></h1>
            <div className='swipe-beige-card'>
              <Card content={
                <>
                  {arr.map((element) => (
                    <FoodCard image={element['image']} menuName={element['menuName']} />
                  ))}
                </>
              }/>
            </div>
      </div>
      </>
  )
}
  
