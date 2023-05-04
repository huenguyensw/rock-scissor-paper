import React from 'react'

const Header = ({ secondspassed, playerName, setPlayerName, numberOfPlays}) => {

    
    const minutes = Math.floor(secondspassed / 3600);
    const seconds = Math.floor((secondspassed - (minutes * 3600)) / 60);
    const mseconds = secondspassed - (minutes * 3600) - (seconds * 60);

    //handle change username
    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }


    return (
        <div>
            <h1 id='title' className='flicker-text'>Rock Scissor Paper</h1>
            <section className='Header'>
                <input id='inputField' type='text' value={playerName} onChange={handleChange} placeholder='Enter user name' />
                <p>Time passed: {minutes}:{seconds < 10 ? '0' + seconds : seconds}:{mseconds < 10 ? '0' + mseconds : mseconds}</p>
                <p>Number of plays: {numberOfPlays}</p>
            </section>
        </div>
    )
}

export default Header
