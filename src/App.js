import './App.css';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock } from '@fortawesome/free-regular-svg-icons'
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { faHandPaper } from '@fortawesome/free-regular-svg-icons';
import DisplayResult from './components/DisplayResult';



function App() {
  const [playerName, setPlayerName] = useState('');
  const [playScore, setPlayScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playChoice, setPlayChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [numberOfPlays, setNumberOfPlays] = useState(0);

  const IDTimer = useRef(null);


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

  //handle change username
  const handleChange = (e) => {
    setPlayerName(e.target.value);
  }



  const handleClick = (val) => {
    setPlayChoice(val);
    setNumberOfPlays(numberOfPlays + 1);
    const randomInt = Math.floor(Math.random() * 3);
    setComputerChoice(randomInt);
    console.log(randomInt)
    if (val == randomInt) {
      setPlayScore(playScore + 1);
      setComputerScore(computerScore + 1);
    } else if (val == randomInt - 1 || randomInt == val - 2) {
      setPlayScore(playScore + 1);
    } else if (val == randomInt - 2 || randomInt == val - 1) {
      setComputerScore(computerScore + 1);
    }

  }


  const handlePlaying = () => {
    if(!playing){
      setComputerScore(0);
      setPlayScore(0);
      setNumberOfPlays(0);
      secondspassed = 0 ;
      setPlayChoice(null);
      setComputerChoice(4);

    }
    setPlaying(!playing);
    handlePlayingTime();
  }

  

  let secondspassed = 0;
  if (startTime != null && now != null) {
    secondspassed = now - startTime;
  }

  const minutes = Math.floor(secondspassed / 3600);
  const seconds = Math.floor((secondspassed - (minutes * 3600)) / 60);
  const mseconds = secondspassed - (minutes * 3600) - (seconds * 60);


  
  return (
    <div className="App">
      <h1 id='title' className='flicker-text'>Rock Scissor Paper</h1>
      <section className='Header'>
        <input id='inputField' type='text' value={playerName} onChange={handleChange} placeholder='Enter user name' />
        <p>Time passed: {minutes}:{seconds < 10 ? '0' + seconds : seconds}:{mseconds < 10 ? '0' + mseconds : mseconds}</p>
        <p>Number of plays: {numberOfPlays}</p>
      </section>
      
      <section className='playing-container'>
        <div >
          <h2 id='username'>{playerName == "" ? 'Username': playerName}</h2>
          <section className='playing-icons'>
            <FontAwesomeIcon icon={faHandRock} size='3x' style={{ color: playChoice == 0 && 'orange', pointerEvents: !playing ? 'none' : 'auto' }} onClick={() => handleClick(0)}/>
            <FontAwesomeIcon icon={faScissors} size='3x' style={{ color: playChoice == 1 && 'orange', pointerEvents: !playing ? 'none' : 'auto' }} onClick={() => handleClick(1)} />
            <FontAwesomeIcon icon={faHandPaper} size='3x' style={{ color: playChoice == 2 && 'orange', pointerEvents: !playing ? 'none' : 'auto' }} onClick={() => handleClick(2)} />
          </section>

          <p>Your score: {playScore}</p>
        </div>
        <div>
          <h2>Computer</h2>
          <section className='playing-icons'>
            <FontAwesomeIcon icon={faHandRock} size='3x' style={{ color: computerChoice == 0 && 'orange', pointerEvents: !playing ? 'none' : 'auto' }} />
            <FontAwesomeIcon icon={faScissors} size='3x' style={{ color: computerChoice == 1 && 'orange', pointerEvents: !playing ? 'none' : 'auto' }} />
            <FontAwesomeIcon icon={faHandPaper} size='3x' style={{ color: computerChoice == 2 && 'orange', pointerEvents: !playing ? 'none' : 'auto' }} />
          </section>
          <p>Computer score: {computerScore}</p>
        </div>
      </section>

      {(!playing && numberOfPlays > 0)&&<DisplayResult playScore={playScore} computerScore={computerScore}/>}

      <button className='btnPlay' onClick={handlePlaying} name={playing ? 'End Game' : 'Play'}>{playing ? 'End Game' : 'Play'}</button>

    </div>
  );
}
export default App;
