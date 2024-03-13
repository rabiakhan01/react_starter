import React from "react";
import imageSource from "../../assets/images/images";
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
    return (
        <footer className="flex justify-center items-center realtive">
        <img src={imageSource.Wave} />
        <div className="absolute flex flex-col justify-center items-center  w-full mt-16 gap-16 text-white">
        <span>rabiakhandev1@gmail.com</span>
        <div className="flex flex-row gap-8">
        <Insta color='white' size='3rem'/>
        <Facebook color='white' size='3rem'/>
        <Github color='white' size='3rem'/>
        </div>
        </div>
       
        </footer>
    );
}

export default Footer;