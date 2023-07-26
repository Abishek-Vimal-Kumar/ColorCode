import React from 'react';
import ColorCode from './ColorCode';
import { useState } from 'react';
import Input from './Input';

function App() {
  
  const [colorValue,setColorValue]=useState('')
  const [hexValue,setHexValue]=useState('')
  const [isDarkText,setIsDarkText]=useState(true)
  
  return (
  <div className='background'>
    <center>
          <ColorCode
            colorValue={colorValue}
            hexValue={hexValue}
            isDarkText={isDarkText}
          ></ColorCode>
          <Input 
            colorValue={colorValue}
            setColorValue={setColorValue}
            hexValue={hexValue}
            setHexValue={setHexValue}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
          >
          </Input>
    </center>
    </div>
  );
}

export default App;
