import React from 'react';
import Buttons from '../Buttons/Button';
import Card from '../Card/Card';
import imageSource from '../../assets/images/images';
import Resume from './RabiaKhanCV.pdf'
const Services = () => {
    return(
           <div className='flex mt-36 mb-80 h-4/5 pl-24'>
           <div className='flex flex-col relative gap-5'>
           <span className='font-bold text-4xl text-black dark:text-white'>My Awesome</span>
           <span className='font-bold text-4xl text-yellow-500'>Services</span>
           <span className='text-gray-600 text-sm'>
           lorium opsium is simply dummy text of printing  of printing Loream for the right div
           <br />
           ipsum is simply dummy text of printing
           </span>
           <a href={Resume} download>
           <Buttons name="Downalod CV" />
           </a>
           </div>
           <div className='relative'>
           <div className=' relative left-56'>
           <Card 
           emoji = {imageSource.Heartemoji}
           heading = "Design"
           detail = {"Figma , Sketch, PhotoShop, Adobe, Adobe xd"}
           />
           </div>
           <div className=' relative -left-8 top-40'>
           <Card 
           emoji = {imageSource.Glasses}
           heading = "Developer"
           detail = {"HTML , CSS, JavaScript, React"}
           />
           </div>
           <div className=' relative left-48 top-64'>
           <Card 
           emoji = {imageSource.Humble}
           heading = "UI/UX"
           detail = "Lorium opsium dummy text are used in section"
           />
           </div>
           <div className="absolute w-48 h-48 rounded-xl bg-purple-200 blur-3xl left-80 top-44 dark:bg-black">
            </div>
            <div className="absolute w-80 h-48 rounded-xl bg-sky-200 blur-3xl right-96 top-64 dark:bg-black">
            </div>
           </div>
           </div>
    );
}
export default Services;