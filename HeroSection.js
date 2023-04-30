import React from 'react';
import'../App.css'
import './HeroSection.css';


function HeroSection() {
  return (
    <>
 
    <div className='hero-container'>
        <video src='\videos\pexels-tima-miroshnichenko-6077718.mp4' autoPlay loop muted/>
       <h1>WELCOME TO CHELSEA FOOTBALL CLUB</h1> 
       <p>Where you get 24/7 Chelsea News</p>
    </div>
    </>
  )
}

export default HeroSection