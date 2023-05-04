import './App.css';
import React, { useState, useRef} from 'react'
import DisplayResult from './components/DisplayResult';
import Header from './components/Header';
import Playing from './components/Playing';



function App() {
  const [playerName, setPlayerName] = useState('');
  const [playScore, setPlayScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [numberOfPlays, setNumberOfPlays] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const IDTimer = useRef(null);
  let secondspassed = 0;

  

  //handle playing time
  const handlePlayingTime = () => {
    if (!playing) {
      setStartTime(Date.now());
      setNow(Date.now());

      clearInterval(IDTimer.current);
      IDTimer.current = setInterval(() => {
        setNow(Date.now())
      }, 15) // update current time every 10ms

    } else {
      clearInterval(IDTimer.current);
    }

  }

  if (startTime != null && now != null) {
    secondspassed = now - startTime;
  }
  return (
    <div className="App">
      <Header secondspassed={secondspassed} playerName={playerName} setPlayerName={setPlayerName} numberOfPlays={numberOfPlays} />

      <Playing playerName={playerName} playing={playing} numberOfPlays={numberOfPlays} setNumberOfPlays={setNumberOfPlays}
        playScore={playScore} setPlayScore={setPlayScore} computerScore={computerScore} setComputerScore={setComputerScore}
        setPlaying={setPlaying} secondspassed={secondspassed} handlePlayingTime={handlePlayingTime} />

      {(!playing && numberOfPlays > 0) && <DisplayResult playScore={playScore} computerScore={computerScore} />}
    </div>
  )
}
export default App;
