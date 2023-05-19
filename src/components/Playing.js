import React, { useRef } from 'react'
import Selection from './Selection'
import { useOutletContext } from 'react-router-dom'
import "./playing.css"
import History from './History'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Playing = () => {
  const { gameMode, player1, player2, updateResult, results, setUpdateResult } = useOutletContext();
  const choiced = useRef(0);//handle number of choices.
  const keys = Object.keys(results);
  let currentResult = '';

  if (keys.length > 1) {
    console.log(results[keys[0]][results[keys[0]].length - 1])
    if (results[keys[0]][results[keys[0]].length - 1] === results[keys[1]][results[keys[1]].length - 1] + 1 || results[keys[0]][results[keys[0]].length - 1] === results[keys[1]][results[keys[1]].length - 1] - 2) {
      if (keys[0] !== 'Computer') {
        currentResult += `${keys[0]} won!`;
      }
      else {
        currentResult += `${keys[1]}, you lost! Try again.`;
      }
    } else if (results[keys[0]][results[keys[0]].length - 1] === results[keys[1]][results[keys[1]].length - 1]) {
      currentResult += 'Draw!'
    } else {
      if (keys[1] !== 'Computer') {
        currentResult += `${keys[1]} won!`;
      }
      else {
        currentResult += `${keys[0]}, you lost! Try again.`;
      }

    }
  }

  const handlePlayingAgain = () => {
    setUpdateResult(false);
  }

  return (
    <div>
      {(updateResult && keys.length > 1)
        ? keys[0] === player1
          ? (
            <div className='playing-container'>
              <div className='player-container' >
                <h2>{keys[0]}</h2>
                {results[keys[0]][results[keys[0]].length - 1] === 0
                  ? <img src='../rock.png' alt='rockimage' />
                  : results[keys[0]][results[keys[0]].length - 1] === 1
                    ? <img src='../paper.png' alt='paperimage' />
                    : <img src='../scissor.png' alt='scissorimage' />}
              </div>
              <motion.h3
                initial={{
                  y: -150,
                  x: -150,
                  opacity: 0
                }}

                animate={{
                  y: 0,
                  x: 0,
                  opacity: 1,
                  // backgroundColor: "#4f6e35",
                  color: "#ffffff"
                }}

                transition={{
                  type: "tween",
                  duration: 1
                }}>{currentResult}
              </motion.h3>
              <div className='player-container' >
                <h2>{keys[1]}</h2>
                {results[keys[1]][results[keys[1]].length - 1] === 0
                  ? <img src='../rock.png' alt='rockimage' />
                  : results[keys[1]][results[keys[1]].length - 1] === 1
                    ? <img src='../paper.png' alt='paperimage' />
                    : <img src='../scissor.png' alt='scissorimage' />}
              </div>
            </div>)
          : (
            <div className='playing-container'>
              <div className='player-container' >
                <h2>{keys[1]}</h2>
                {results[keys[1]][results[keys[1]].length - 1] === 0
                  ? <img src='../rock.png' alt='rockimage' />
                  : results[keys[1]][results[keys[1]].length - 1] === 1
                    ? <img src='../paper.png' alt='paperimage' />
                    : <img src='../scissor.png' alt='scissorimage' />}
              </div>
              <motion.h3
                initial={{
                  y: -150,
                  x: -150,
                  opacity: 0
                }}

                animate={{
                  y: 0,
                  x: 0,
                  opacity: 1,
                  // backgroundColor: "#4f6e35",
                  color: "#ffffff"
                }}

                transition={{
                  type: "tween",
                  duration: 1
                }}>{currentResult}
              </motion.h3>
              <div className='player-container'>
                <h2>{keys[0]}</h2>
                {results[keys[0]][results[keys[0]].length - 1] === 0
                  ? <img src='../rock.png' alt='rockimage' />
                  : results[keys[0]][results[keys[0]].length - 1] === 1
                    ? <img src='../paper.png' alt='paperimage' />
                    : <img src='../scissor.png' alt='scissorimage' />}
              </div>
            </div>)
        : gameMode === '1'
          ? (<div className='playing-container'>
            <Selection player={player1} choiced={choiced} />
            <div className='computer-container'>
              <h2>Computer</h2>
              <p>Picked random</p>
            </div>
          </div>)
          : (
            <div className='playing-container'>
              <Selection player={player1} choiced={choiced}  />
              <Selection player={player2} choiced={choiced}  />
            </div>
          )
      }
      <div className='buttons'>
        {updateResult && <button className='playAgainBtn' onClick={handlePlayingAgain}>Play again</button>}
        <Link className='backToHome' to={"/"}>End game</Link>
      </div>
      <History />
    </div >
  )
}

export default Playing
