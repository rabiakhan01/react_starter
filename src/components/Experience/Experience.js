import React from "react";
const Experience = () => {
    return(
        <div className="flex items-center justify-center gap-16 mb-32">
        <div className="flex flex-col justify-center items-center">
        <div className="flex relative justify-center items-center font-bold  text-2xl w-16 h-16 mb-7 bg-white border-8" style={{borderImage: 'linear-gradient(to bottom, #87c6fb 0%, #ffc05c 100%)', borderImageSlice: 1}}>8+</div>
        <span>years </span>
        <span className="text-yellow-600">Experience</span>
       </div>
        <div className="flex flex-col justify-center items-center">
        <div className="flex relative justify-center items-center font-bold  text-2xl w-16 h-16 mb-7 bg-white border-8" style={{borderImage: 'linear-gradient(to bottom, #87c6fb 0%, #ffc05c 100%)', borderImageSlice: 1}}>20+</div>
        <span>completed </span>
        <span className="text-yellow-600">Projects</span>
        </div>
         <div className="flex flex-col justify-center items-center">
         <div className="flex relative justify-center items-center font-bold  text-2xl w-16 h-16 mb-7 bg-white border-8" style={{borderImage: 'linear-gradient(to bottom, #87c6fb 0%, #ffc05c 100%)', borderImageSlice: 1}}>5+</div>
         <span>compnaies</span>
         <span className="text-yellow-600">Work</span>
         </div>
        </div>
        
    )
}
export default Experience;