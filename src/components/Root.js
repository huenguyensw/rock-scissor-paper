import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import "./root.css"

const Root = () => {
    const [gameMode, setGameMode] = useState(1);
    const [player1, setPlayer1] = useState('Hanna');
    const [player2, setPlayer2] = useState('Maria');
    const [results, setResults] = useState({});
    const [updateResult, setUpdateResult] = useState(false); // to check if a play done

  return (
    <div className='root'>
      <h1>Rock Paper Scissor</h1>
      <section>
        <Outlet context={{gameMode,player1,player2, setPlayer1,setPlayer2,setGameMode,results,setResults,updateResult, setUpdateResult}} />
      </section>
    </div>
  )
}

export default Root
