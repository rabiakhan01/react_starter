import React from "react";
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { useState, useEffect } from 'react';

const Toggle = () => {
    const [dark, setDark] = useState(false);
  function handeThemeSwitch() {
    document.documentElement.classList.toggle("dark")
    if(dark === false){
    setDark(true);
    }
    else{
      setDark(false);
    }
  }
  

return(
    <div className="flex justify-between border-4 border-yellow-500 rounded-2xl p-1 cursor-pointer relative" onClick={handeThemeSwitch}>
    <Moon className="w-4 h-4 text-yellow-500" />
    <Sun className="w-4 h-4  text-yellow-500"/>
    
    <div className="rounded-full bg-yellow-500 h-4 w-4 absolute" 
    style={ dark ? {left: '3px'} : {right: '3px'}}
    >
    
    </div>
    </div>
);
}

export default Toggle;