import React from 'react'


const DisplayResult = ({ playScore, computerScore }) => {
    
    if (playScore == computerScore) {
        return (
                <h1 className='resultMessage'>Draw match!</h1>
        )
    } else if (playScore > computerScore) {
        return (
                <h1 className='resultMessage'>Congras. You won!</h1>
        )

    } else {
        return (
                <h1 className='resultMessage'>Regret! You lost. Try next time</h1>

        )
    }
}

export default DisplayResult
