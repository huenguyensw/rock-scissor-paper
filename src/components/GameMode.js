import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Link } from 'react-router-dom';
import "./gamemode.css"

const GameMode = () => {
  const { player1, player2, gameMode, setPlayer1, setPlayer2, setGameMode, setResults, setUpdateResult } = useOutletContext();

  const handleGameMode = (e) => {
    setGameMode(e.target.value);
  }

  const handleNameOfPlayer1 = (e) =>{
    setPlayer1(e.target.value);
  }

  const handleNameOfPlayer2 = (e) =>{
    setPlayer2(e.target.value);
  }

  const handleStartGame = () =>{
    setResults({});
    setUpdateResult(false);
  }

  return (
    <div className='gamemode-container'>
      <div>
        Game mode:<span> </span>
        <select value={gameMode} onChange={handleGameMode}>
          <option value='1'> Single </option>
          <option value='2'> Multiple </option>
        </select>
      </div>
      <div>
        {gameMode === '1'?'Enter player name:':'Enter player 1:'}<span> </span>
        <input type='text' value={player1} onChange={handleNameOfPlayer1} />
      </div>
      {gameMode === '2' &&
      <div>
        Enter player 2: <span> </span>
        <input type='text' value={player2} onChange={handleNameOfPlayer2} />
      </div>
      }
      <button className='playBtn' onClick={handleStartGame}><Link className='playLink' to={"/playing"}>Play</Link></button>
    </div>
  )
}

export default GameMode
