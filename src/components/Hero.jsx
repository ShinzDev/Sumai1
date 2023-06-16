import React from 'react'
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className=' w-full flex justify-center items-center flex-col'> 
    <nav className='flex justify-between items-center flex-col'>
      <img src={logo} alt="somz logo" className='w-28 object-contain'/>
    </nav>
    </header>


  )
}

export default Hero
