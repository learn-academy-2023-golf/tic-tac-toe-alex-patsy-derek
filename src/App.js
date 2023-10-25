import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState('X')
  const [moves, setMoves] = useState(0)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ]

    return lines.some(([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) || null
  }
  

  const handleSquareClick = (index) => {
     if (squares[index] === null && !calculateWinner(squares)) {
      const newSquares = [...squares]
      newSquares[index] = player
      setSquares(newSquares)
      const winner = calculateWinner(newSquares)
      if (winner) {
        alert(`Player wins!`)
      } else {
      setPlayer(player === 'X' ? 'O' : 'X')
      setMoves(moves + 1)
     }

     if (moves === 8) {
      alert('The game has ended!')
     }
     
  }}
  const resetGame = () => {
    window.location.reload()
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
      <button onClick={resetGame}>Reset Game</button>
      <footer>Brought To You By PAD</footer>
    </>
  )
}

export default App
