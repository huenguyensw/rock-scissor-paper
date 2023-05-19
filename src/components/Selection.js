import React, { useState } from 'react'
import './selection.css'
import { useOutletContext } from 'react-router-dom'

const Selection = ({ player, choiced }) => {
    const { results, setResults, gameMode, setUpdateResult } = useOutletContext();
    const [picked, setPicked] = useState(false);

    const handleSelection = (val) => {
        setPicked(true);
        results[player] = (results[player] || []).concat([val]);
        setResults(results);
        choiced.current = choiced.current + 1;
        setUpdateResult(false);
        if (gameMode === '1') {
            const randomInt = Math.floor(Math.random() * 3);
            results['Computer'] = (results['Computer'] || []).concat([randomInt]);
            setResults(results);
            setUpdateResult(true);
        }
        if (gameMode === '2' && choiced.current === 2) {
            choiced.current = 0;
            setUpdateResult(true);
            
        }
    }
    return (
        <div className='player-container'>
            <h2>{player}</h2>
            {(gameMode === '2' && picked)
            ? (<p>Picked</p>)
            :
            (<div className='selection-container'>
                <button className='iconBtn' onClick={() => handleSelection(0)}><img src='../rock.png' alt='rockimage' /></button>
                <button className='iconBtn' onClick={() => handleSelection(1)}><img src='../paper.png' alt='paperimage' /></button>
                <button className='iconBtn' onClick={() => handleSelection(2)}><img src='../scissor.png' alt='scissorimage' /></button>
             </div>)
            }
        </div>
    )
}
export default Selection
