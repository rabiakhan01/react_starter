import React from "react";
import Buttons from "../Buttons/Button";
import imageSource from "../../assets/images/images";
const Works = () => {
    return(
        <div className='flex mt-36 mb-80 h-4/5 pl-24'>
        <div className='flex flex-col relative gap-5'>
        <span className='font-bold text-4xl text-black dark:text-white'>Works for All these</span>
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
        
        <Buttons name="Hire Me" />
        
        <div className="absolute w-96 h-48 rounded-xl bg-sky-200 blur-3xl right-96 top-80 dark:bg-black">
        </div>
        </div>
        <div className="relative">
        <div className="left-44 relative w-72 h-72 bg-white rounded-full shadow-2xl shadow-slate-300">
        <div className="absolute -top-14 left-24 w-24 h-24 rounded-full border-4 border-gray-100 flex items-center justify-center bg-white ">
        <img src ={imageSource.Upwork} alt="upwork" className="w-12 h-12"/>
        </div>
        <div className="absolute top-28 -left-14 w-24 h-24 rounded-full border-4 border-gray-100 flex items-center justify-center bg-white ">
        <img src ={imageSource.Fiverr} alt="fiverr" className="w-8 h-8"/>
        </div>
        <div className="absolute top-24 left-24 w-24 h-24 rounded-full border-4 border-gray-100 flex items-center justify-center bg-white">
        <img src ={imageSource.Amazon} alt="amazon"className="w-14 h-14" />
        </div>
        <div className="absolute -right-14 top-24 w-24 h-24 rounded-full border-4 border-gray-100 flex items-center justify-center bg-white">
        <img src ={imageSource.Shopify} alt="shopify" className="w-12 h-12"/>
        </div>
        <div className="absolute -bottom-14 left-24 w-24 h-24 rounded-full border-4 border-gray-100 flex items-center justify-center bg-white">
        <img src ={imageSource.Facebook} alt="facebook" className="w-12 h-12"/>
        </div>
        </div>
        <div className="absolute -z-10 rounded-full h-52 w-52 bg-blue-800 left-96 -top-10"></div>
        <div className="absolute -z-10 rounded-full h-52 w-52 bg-yellow-500 left-96 top-24">Yellow</div>
        </div>
        </div>
    );
}

export default Works;