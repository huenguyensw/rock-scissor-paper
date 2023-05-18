import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import "./root.css"

const Root = () => {
    const [gameMode, setGameMode] = useState(1);
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [results, setResults] = useState({});
    const [updateResult, setUpdateResult] = useState(false); // to check if a play done

  return (
    <div>
      <h1>Rock Scissor Paper</h1>
      <section>
        <Outlet context={{gameMode,player1,player2, setPlayer1,setPlayer2,setGameMode,results,setResults,updateResult, setUpdateResult}} />
      </section>
    </div>
  )
}

export default Root
