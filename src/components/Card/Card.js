import React from "react";
const Card = ({emoji, heading, detail}) => {
    return (
        <div className="flex absolute flex-col h-52 w-48 gap-2 items-center text-center bg-slate-50 border-4 border-yellow-400 rounded-xl p-3 z-10">
        <img src= {emoji} alt="" className="h-16 w-18"/>
        <span>{heading}</span>
        <spna className="text-xs text-gray-600 ">{detail}</spna>
        <button className="p-2 bg-white text-sm border-none rounded-md text-sky-500">LEARN MORE</button>
        </div>
    );
}

export default Card;