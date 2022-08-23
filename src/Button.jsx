import React from 'react';
import "./Button.css";

function Button({btnRang,setColor}){
    const chooseColor=()=>{
        setColor(btnRang)
    }
  return (
    <button onClick={chooseColor} style={{backgroundColor:btnRang}}>{btnRang}
        
    </button>
  )
}

export default Button;