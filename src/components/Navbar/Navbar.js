import React from 'react';
import Buttons from '../Buttons/Button';
const navBar = () => {
    return(
        <div className='flex flex-wrap justify-between h-12  py-3'>
        <div className='flex-1 items-center flex gap-2'>
        <div className='font-bold text-lg'>Andrew</div>
        <span>Toggle</span>
        </div>
        <div className='flex-1 flex justify-center items-center font-normal'>
        <div className='flex-10'>
        <ul className='flex gap-2 m-4 cursor-pointer'>
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