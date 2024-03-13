import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import imageSource from "../../assets/images/images";
const Portfolio = () => {
    return(

        <div className=" flex flex-col justify-center items-center gap-4 mb-20">
        <span className="text-black text-3xl font-bold dark:text-white">Recent Projects</span>
        <span className="text-4xl text-yellow-500 font-bold">Portfolio</span>
        <div className="w-full">
        <Swiper
        slidesPerView={3}
       spaceBetween={30}
        grabCursor={true}
      >
        <SwiperSlide>
        <div className="h-80 flex justify-center items-center overflow-hidden">
        <img src = {imageSource.Sidebar} alt="sidebar" className="w-screen h-72 drop-shadow-2xl rounded-3xl"/> 
        </div></SwiperSlide>
        <SwiperSlide> <div className="h-80 flex justify-center items-center"> 
        <img src = {imageSource.Ecommerce} alt="sidebar" className="w-screen h-72 drop-shadow-2xl rounded-3xl"/> 
        </div></SwiperSlide>
        <SwiperSlide> <div className="h-80 flex justify-center items-center"> 
        <img src = {imageSource.MusicApp} alt="sidebar" className="w-screen h-72 drop-shadow-2xl rounded-3xl"/> 
        </div></SwiperSlide>
        <SwiperSlide> <div className="h-80 flex justify-center items-center">
        <img src = {imageSource.HOC} alt="sidebar" className="w-screen h-72 drop-shadow-2xl rounded-3xl"/> 
        </div></SwiperSlide>

      </Swiper>
      </div>
       
        </div>
    );
}

export default Portfolio;
