import React, { Component, useState } from "react";
import Select from 'react-select';
import '../styles/App.css';

function App() {
  var colors = [
    {
      background: 'rgb(238, 241, 0)',
      label: "Happy"
    },
    {
      background: 'rgb(19, 0, 164)',
      label: "Sad"
    },
    {
      background: 'rgb(35, 177, 0)',
      label: "Sleepy"
    },
    {
      background: 'rgb(255, 0, 66)',
      label: "Excited"
    }
  ];
  var [setbgcolor, handleChange] = useState(colors.label);
  var handleChange = e => {
    handleChange(e.label);
  }
  return (
    <>
      <div id="mood-indicator" ><style>{'body{ background-color:'+setbgcolor+';}'}</style>
        {/* <style>{{backgroundColor:"rgb(238, 241, 0)"}}</style> */}
        <Select options={colors} onChange={handleChange} >  </Select>
        <center>
          <b>My mood is : {setbgcolor}</b>
        </center>
      </div>
      {/* <div id="mood-indicator" style={{ backgroundColor: 'rgb(238, 241, 0)' }}></div> */}
    </>
  );

}

export default App;

// const App = () => {

  // return (
    // <div id="main" style={{backgroundColor:"red"}}>
    //         <h1>hello colors</h1>
    //   <select onChange={handleChange}>
    //     <option>Happy</option>
    //     <option>Sad</option>
    //     <option>Sleepy</option>
    //     <option>Excited</option>
    //   </select>
    //   <div id="mood-indicator" style={{backgroundColor:'rgb(238, 241, 0)'}}></div>
    //   <h1>hello colors</h1>
    // </div>
  // )
// }


// export default App;
