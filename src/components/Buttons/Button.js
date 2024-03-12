import React from "react";
const Buttons = (props) => {
    return (
        <>
        <button className='border-none bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-3xl px-4 py-2 text-white text-xs shadow-xl shadow-orange-300 flex-2 w-28 h-8 z-10'>{props.name}</button>
        </>
    );
}

export default Buttons