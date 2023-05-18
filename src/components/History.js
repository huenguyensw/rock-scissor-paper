import React from 'react'
import { useOutletContext } from 'react-router-dom'
import "./history.css"

const History = () => {
  const { results } = useOutletContext();
  const keys = Object.keys(results);
  const length = keys.length > 1 && (results[keys[0]].length >= 10 ? 10 : results[keys[0]].length);
  let player1Total = 0;
  let player2Total = 0;

  if (keys.length > 1) {

    results[keys[0]].map((val, idx) => {
      const val1 = results[keys[0]][results[keys[0]].length - length + idx];
      const val2 = results[keys[1]][results[keys[1]].length - length + idx];
      if (val1 == val2 - 1 || val2 == val1 - 2) {
        player1Total += 1;
      } else if (val2 == val1 - 1 || val1 == val2 - 2) {
        player2Total += 1;
      }
    })
  }

  return (
    <div className='history-container'>
      <h2>History</h2>
      {keys.length > 1
        ? <table className='history'>
          <thead>
            <tr>
              <th>{keys[0]}({player1Total})</th>
              <th>{keys[1]}({player2Total})</th>
            </tr>
          </thead>
            <tbody>{(keys.length > 1) && results[keys[0]].slice(-length).map((val, idx) => {
              const val1 = results[keys[0]][results[keys[0]].length - length + idx];
              const val2 = results[keys[1]][results[keys[1]].length - length + idx];
              if (val1 == val2 + 1 || val2 == val1 - 2) {

                return (
                  <tr key={idx}>
                    <td style={{ fontSize: '1.5rem' }}>{keys[0]}({val1 == 0 ? 'rock' : val1 == 1 ? 'paper' : 'scissor'})</td>
                    <td>{keys[1]}({val2 == 0 ? 'rock' : val2 == 1 ? 'paper' : 'scissor'})</td>
                  </tr>);
              } else if (val2 == val1 + 1 || val1 == val2 - 2) {

                return (
                  <tr key={idx}>
                    <td>{keys[0]}({val1 == 0 ? 'rock' : val1 == 1 ? 'paper' : 'scissor'})</td>
                    <td style={{ fontSize: '1.5rem' }}>{keys[1]}({val2 == 0 ? 'rock' : val2 == 1 ? 'paper' : 'scissor'})</td>
                  </tr>);
              } else {
                return (
                  <tr key={idx}>
                    <td>{keys[0]}({val1 == 0 ? 'rock' : val1 == 1 ? 'paper' : 'scissor'})</td>
                    <td>{keys[1]}({val2 == 0 ? 'rock' : val2 == 1 ? 'paper' : 'scissor'})</td>
                  </tr>);
              }
            })}
            </tbody>
        </table>
        : null}
    </div>
  )
}

export default History
