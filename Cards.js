import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Blogs</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem src='\images\gettyimages-1320693211-612x612.jpg'
              text=' Can Kai Havertz break the Chelsea number nine(9) curse? '
              label='Kai Havertz'
              path='/blogs'/>

              <CardItem src='/images/gettyimages-1462257500-612x612.jpg'
              text='Enzo Fernades made a statement in a Pre-conference'
              label='Enzo'
              path='/about'/>
            </ul>
            <ul className='cards__items'>
              <CardItem src='\images\gettyimages-1233174773-612x612.jpg'
              text='Ngolo Kante is back on Track '
              label='Ngolo Kante'
              path='/blogs'/>

              <CardItem src='\images\gettyimages-1458203828-612x612.jpg'
              text='Mykhailo Mudryk gets his first Premier League assit for the Blues'
              label='Mudryk'
              path='/about'/>
              <CardItem src='\images\gettyimages-1320698291-612x612.jpg'
              text='Click to see what Chelsea Fans says about Tuchel'
              label='Thomas'
              path='/about'/>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Cards