import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState('X')

  const handleSquareClick = (index) => {
     if (squares[index] === null) {
      const newSquares = [...squares]
      newSquares[index] = player
      setSquares(newSquares)
      setPlayer(player === 'X' ? 'O' : 'X')
    }

  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='gameBoard'>
        {squares.map((value, index) => (
          <Square
            value={value}
            key={index}
            onClick={() => handleSquareClick(index)} 
          />
        )
        )}
      </div>
    </>
  )
}

export default App;
