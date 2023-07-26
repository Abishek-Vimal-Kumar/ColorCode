import React from "react"; 

const ColorCode=({colorValue,hexValue,isDarkText})=>{
    return(
       <section
         className="Square"
         style={{backgroundColor:colorValue,
         color: isDarkText?"#000":"#FFF"}}
       >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>

       </section>
    )
}
ColorCode.defaultProps={colorValue:"Empty Color Value"}

export default ColorCode;