import React from 'react';
import colorNames from 'colornames';

const Input=({colorValue,setColorValue,hexValue,setHexValue,isDarkText,setIsDarkText})=>{
     return (
        <form onSubmit={(e)=>e.preventDefault()}>
            <input
            autoFocus
            className="inputBox"
            type='text'
            required
            placeholder='Add Color Name'
            value={colorValue}
            onChange={(e)=>{
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
            }}
            >
            </input>
            <br/>
            <button 
                type="button"
                onClick={()=>setIsDarkText(!isDarkText)}>
                    Toggle Text Color
            </button>
        </form>
     )
}

export default Input;