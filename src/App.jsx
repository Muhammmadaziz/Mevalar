import React, { useState } from 'react';
import Button from "./Button"
import "./App.css"

function App() {
  const [rang, setColor] = useState("white")
  const allColors = ["blue", "yellow", "red", "green", "orange", "aqua", "black", "tan"]

  // const [rang, setRang] = useState("white");
  // const BlueBtn = (e) => {
  //   setRang(e.target.value);
  // };
  // const RedBtn = (e) => {
  //   setRang(e.target.value);
  // };
  // const OrangeBtn = (e) => {
  //   setRang(e.target.value);
  // };
  // const [text, setText] = useState("")
  // const [word, setWord] = useState("")

  // const [inputVal, setInputVal] = useState("")
  // const [rang, setRang] = useState("white")

  // const eventBtn = (event) => {
  //   event.preventDefault()

  //   setWord(text)
  // const change = () => {
  //   setRang(inputVal)
  // }
  return (
    <div className="App" style={{ backgroundColor: rang }}>
      <div className="colors">
        {allColors.map((item, index) => (
          <Button btnRang={item} setColor={setColor} />
        ))}
      </div>
    </div>
  );
  {/* </div>
     <div className="App" style={{ backgroundColor: rang }}>
       <div className="Color">
       <button value="blue" onClick={BlueBtn}></button>
       <button value="red" onClick={RedBtn}></button>
       <button value="orange" onClick={OrangeBtn}></button> 
       </div>
     </div> */}

}
{/* { <div className='App' style={{backgroundColor:rang}}>
      <input onChange={e => setInputVal(e.target.value)} type="text" />
    <button onClick={change}>Color</button>
      <h2>{text}</h2> }

       <from action="">
        <input onChange={(e) => setText(e.target.value)} type="text" />
        <button type="submit" onClick={eventBtn}>Enter</button>
      </from>
      <h2>{word}</h2> 
    </div> */}
//   <from action="">
//   <input onChange={(e) => setText(e.target.value)} type="text" />
//   <button type="submit" onClick={eventBtn}>Enter</button>
// </from>
// <h2>{word}</h2> 

export default App;
