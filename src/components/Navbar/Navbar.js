import React from 'react';
import Buttons from '../Buttons/Button';
import Toggle from '../Toogle/Toggle';
const navBar = () => {
    return(
        <div className='flex flex-wrap justify-between h-12 py-3 pl-24'>
        <div className='flex-1 items-center flex gap-2'>
        <div><span className='font-bold text-lg'>Andrew</span></div>
        <Toggle />
        </div>
        <div className='flex-1 flex justify-center items-center font-normal'>
        <div className='flex-10'>
        <ul className='flex gap-10 m-4 cursor-pointer'>
        <li className='hover:text-orange-600'>Home</li>
        <li className='hover:text-orange-600'>Services</li>
        <li className='hover:text-orange-600'>Experience</li>
        <li className='hover:text-orange-600'>Portfolio</li>
        <li className='hover:text-orange-600'>Testimonial</li>
        </ul>
        </div>
        <Buttons name = "Contact"/>
        </div>
        </div>
    );
}

export default navBar;