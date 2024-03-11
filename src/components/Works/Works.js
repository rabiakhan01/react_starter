import React from "react";
import Buttons from "../Buttons/Button";
import Resume from '../Services/RabiaKhanCV.pdf'
const Works = () => {
    return(
        <div className='flex p-12 mt-36 mb-80 h-4/5 '>
        <div className='flex flex-col relative gap-5'>
        <span className='font-bold text-4xl text-black'>Works for All these</span>
        <span className='font-bold text-4xl text-yellow-500'>Brands & Clients</span>
        <span className='text-gray-600 text-sm'>
        lorium opsium is simply dummy text of printing  of printing Loream
        <br />
        ipsum is simply dummy text of printing
        <br /> 
        lorium is simply a dummy text of pricing and printing
        <br />
        Lorium is simply a dummy text
        </span>
        <a href={Resume} download>
        <Buttons name="Downalod CV" />
        </a>
        <div className="absolute w-96 h-48 rounded-xl bg-sky-200 blur-3xl right-96 top-80">
        </div>
        </div>
        <div>
        
        </div>
        </div>
    );
}

export default Works;