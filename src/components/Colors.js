import React, { useState } from 'react'
import '../styles/App.css';

const Colors = () => {
  const [colors,setColors]= useState({
    //x:245, y:241, z:0
    color:'yellow'
  })
  const handleChange=(moodColor)=>{
    if(moodColor.target.value === "happy")
    {
      setColors({...colors,color:'yellow'});
    } 
    else if(moodColor.target.value === "sad")
    {
      setColors({...colors,color:'darkblue'});
    }
    else if(moodColor.target.value === "sleepy")
    {
      setColors({...colors,color:'forestgreen'});
    }
    else if(moodColor.target.value === "excited")
    {
      setColors({...colors,color:'crimson'});
    }
  }
  return (
    <div id="main">
    <select onChange={handleChange}>
      <option value="happy">Happy</option>
      <option value="sad">Sad</option>
      <option value="sleepy">Sleepy</option>
      <option value="excited">Excited</option>
    </select>
    {/* <div id="mood-indicator" style={{backgroundColor:`rgb(${colors.x}, ${colors.y},${colors.z})`}}></div> */}
    <div id="mood-indicator" style={{backgroundColor:`${colors.color}`}}></div>
  </div>
  );
}
export default Colors;