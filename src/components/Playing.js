import React, { useRef } from 'react'
import Selection from './Selection'
import { useOutletContext } from 'react-router-dom'
import "./playing.css"
import History from './History'
import { Link } from 'react-router-dom'

const Playing = () => {
  const { gameMode, player1, player2, updateResult, results, setUpdateResult } = useOutletContext();
  const choiced = useRef(0);//handle number of choices.
  const keys = Object.keys(results);
  if (keys.length > 1) {
    console.log(results[keys[0]][results[keys[0]].length - 1])
    console.log(keys[0])
    console.log(results)
  }

  const handlePlayingAgain = () => {
    setUpdateResult(false);
  }

  return (
    <div>
      {(updateResult && keys.length > 1)
        ? keys[0] == player1
          ? (
            <div className='playing-container'>
              <div className='player-container' >
                <h2>{keys[0]}</h2>
                {results[keys[0]][results[keys[0]].length - 1] == '0'
                  ? <img src='../rock.png' />
                  : results[keys[0]][results[keys[0]].length - 1] == '1'
                    ? <img src='../paper.png' />
                    : <img src='../scissor.png' />}
              </div>
              <div className='player-container' >
                <h2>{keys[1]}</h2>
                {results[keys[1]][results[keys[1]].length - 1] == '0'
                  ? <img src='../rock.png' />
                  : results[keys[1]][results[keys[1]].length - 1] == '1'
                    ? <img src='../paper.png' />
                    : <img src='../scissor.png' />}
              </div>
            </div>)
          : (
            <div className='playing-container'>
              <div className='player-container' >
                <h2>{keys[1]}</h2>
                {results[keys[1]][results[keys[1]].length - 1] == '0'
                  ? <img src='../rock.png' />
                  : results[keys[1]][results[keys[1]].length - 1] == '1'
                    ? <img src='../paper.png' />
                    : <img src='../scissor.png' />}
              </div>
              <div className='player-container'>
                <h2>{keys[0]}</h2>
                {results[keys[0]][results[keys[0]].length - 1] == '0'
                  ? <img src='../rock.png' />
                  : results[keys[0]][results[keys[0]].length - 1] == '1'
                    ? <img src='../paper.png' />
                    : <img src='../scissor.png' />}
              </div>
            </div>)
        : gameMode == '1'
          ? (<div className='playing-container'>
            <Selection player={player1} choiced={choiced} />
            <div className='computer-container'>
              <h2>Computer</h2>
              <p>Picked random</p>
            </div>
          </div>)
          : (
            <div className='playing-container'>
              <Selection player={player1} choiced={choiced} />
              <Selection player={player2} choiced={choiced} />
            </div>
          )
      }
      <div className='buttons'>
        {updateResult && <button className='playAgainBtn' onClick={handlePlayingAgain}>Play again</button>}
        <Link className='backToHome' to={"/"}>End Game</Link>
      </div>
      <History />
    </div >
  )
}

export default Playing
