import React,{useState} from "react";


function App() {
  const time = new Date().toLocaleTimeString();
  const [currentTime,setCurrentTime]=useState(time);
  
 function updateTime(){
    const newTime= new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  }

  return (
    <div>
      <h1>Digital Clock ⏰</h1>
       <div className="container">
            <h1 className="heading">{currentTime}</h1>
            <button onClick={updateTime}>Get Time</button>
       </div>
       <footer>Made with 🌷 in Delft</footer>
    </div>
  );
}

export default App;