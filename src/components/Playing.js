import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock } from '@fortawesome/free-regular-svg-icons'
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { faHandPaper } from '@fortawesome/free-regular-svg-icons';

const Playing = ({ playerName, playing, numberOfPlays, setNumberOfPlays, playScore, setPlayScore, computerScore, setComputerScore, secondspassed, setPlaying, handlePlayingTime}) => {
    const [playChoice, setPlayChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    


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
        if (!playing) {
            setComputerScore(0);
            setPlayScore(0);
            setNumberOfPlays(0);
            secondspassed = 0;
            setPlayChoice(null);
            setComputerChoice(4);

        }
        setPlaying(!playing);
        handlePlayingTime();
    }

    

    return (
        <>
            <section className='playing-container'>
                <div >
                    <h2 id='username'>{playerName == "" ? 'Username' : playerName}</h2>
                    <section className='playing-icons'>
                        <FontAwesomeIcon icon={faHandRock} size='3x' style={{ color: playChoice == 0 && 'orange' }} className={playing ? 'icons-active' : 'icons-deactive'} onClick={() => handleClick(0)} />
                        <FontAwesomeIcon icon={faScissors} size='3x' style={{ color: playChoice == 1 && 'orange' }} className={playing ? 'icons-active' : 'icons-deactive'} onClick={() => handleClick(1)} />
                        <FontAwesomeIcon icon={faHandPaper} size='3x' style={{ color: playChoice == 2 && 'orange' }} className={playing ? 'icons-active' : 'icons-deactive'} onClick={() => handleClick(2)} />
                    </section>

                    <p>Your score: {playScore}</p>
                </div>
                <div>
                    <h2>Computer</h2>
                    <section className='playing-icons'>
                        <FontAwesomeIcon icon={faHandRock} size='3x' style={{ color: computerChoice == 0 && 'orange' }} />
                        <FontAwesomeIcon icon={faScissors} size='3x' style={{ color: computerChoice == 1 && 'orange' }} />
                        <FontAwesomeIcon icon={faHandPaper} size='3x' style={{ color: computerChoice == 2 && 'orange' }} />
                    </section>
                    <p>Computer score: {computerScore}</p>
                </div>
            </section>
            <button className='btnPlay' onClick={handlePlaying} name={playing ? 'End Game' : 'Play'}>{playing ? 'End Game' : 'Play'}</button>
        </>
    )
}

export default Playing
