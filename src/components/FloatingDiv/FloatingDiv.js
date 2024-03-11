import React from "react";
const FloatingDiv = ({imgSrc, text1, text2}) => {
    return(
        <div className="flex justify-around  bg-white shadow-xl rounded-2xl items-center h-16 p-4 text-sm gap-4">
        <img src={imgSrc} alt="" className="h-10 w-10" />
        <span className="font-serif">
        {text1} <br />
        {text2}
        </span>
        </div>
    )
}
export default FloatingDiv;