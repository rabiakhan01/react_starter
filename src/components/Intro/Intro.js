import React from "react";
import Buttons from "../Buttons/Button";
import imageSource from "../../assets/images/images";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
const Intro = () => {
    return (
        <div className="flex flex-wrap mt-24">
            <div className="flex flex-1 realtive flex-col gap-6">
                <div className="flex flex-col">
                    <span className="text-5xl text-black font-bold">Hy! I Am</span>
                    <span className="text-yellow-500 font-bold text-5xl">Andrew Thomas</span>
                    <span className="font-thin text-sm mt-5 text-gray-600">Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
                </div>
                <Buttons name="Hire Me" />
                <div className="flex mt-12 h-8 w-8 gap-6 hover:cursor-pointer">
                    <img src={imageSource.GitHub} />
                    <img src={imageSource.LinkedIn} />
                    <img src={imageSource.Insta} />
                </div>
            </div>
            <div className="flex-1 relative">
             <img src={imageSource.Vector1} className="absolute z-10 scale-75 -left-14 -top-8"/>
             <img src={imageSource.Vector2} className="absolute z-10 scale-75 -top-12 -left-6"/>
             <img src={imageSource.Boy} className="absolute z-10 scale-110 left-28"/>
             <img src={imageSource.Glassesimoji} alt="" className="absolute -left-40 -top-20 scale-50"/>
             <div className="absolute z-10 left-72 -top-4">
             <FloatingDiv imgSrc={imageSource.Crown} text1 = "Web" text2= "Developer"/>
             </div>
             <div className="absolute z-10 -bottom-3 left-1">
             <FloatingDiv imgSrc={imageSource.Thumbup} text1 = "Best Design" text2= "Award"/>
             </div>
             <div className="absolute w-28 h-80 rounded-xl bg-pink-200 blur-3xl right-0 -top-20">
            </div>
            <div className="absolute w-60 h-96 rounded-xl bg-sky-200 blur-3xl right-96 top-48">
            </div>
            </div>
        </div>
    );
}
export default Intro;