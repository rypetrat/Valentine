import { useState, useEffect } from "react";
import "./App.css";


const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "I'm gonna cry..",
  "You're breaking my heart"
]

interface Position {
  left: number;
  top: number;
}

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16
  const [position, setPosition] = useState<Position>({ left: 0, top: 0});
  // left: 1000, top: 674
  
  function handleNoClick() {
    setNoCount(noCount + 1);
    setPosition({
      left: Math.random() * (window.innerWidth - 100),
      top: Math.random() * (window.innerHeight - 100)
    });
    
  }

  function handleYesClick() {
    setYesPressed(true)
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length-1)]
  }

  return (
    <div className='valentine-container'> 
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
          <div className='text'>Yippee !!!</div>
        </>
      ) : (
        <>
          <img className='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
          <div className='text' >Will you be my valentine Mackenzie?</div>
          <div className='both-Button'>

          <button className="button1" style={{ position: 'absolute', left: position.left, top: position.top, fontSize: yesButtonSize, color: 'rgb(0, 0, 0)' }} onClick={handleYesClick}> Yes </button>

          <button className="button2" style={{position: 'absolute', left: position.left, top: position.top, color: 'rgb(0, 0, 0)' }} onClick={handleNoClick}> {getNoButtonText()} </button>

          </div>
        </>
      )}
    </div>
  );
}

export default App;