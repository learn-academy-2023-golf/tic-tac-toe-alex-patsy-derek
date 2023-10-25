import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  // Function to handle a square click
  const handleSquareClick = (index) => {
    // Create a copy of the squares array to avoid mutating state directly
    const newSquares = [...squares]
    
    // Check if the square is already filled or if the game is over
    if (newSquares[index] === null) {
      // Set the square to 'X' or 'O' based on the current player
      newSquares[index] = 'X' // You can alternate 'X' and 'O' for each player's turn

      // Update the state with the new squares array
      setSquares(newSquares)
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
            onClick={() => handleSquareClick(index)} // Pass the click handler
          />
        )
        )}
      </div>
    </>
  )
}

export default App;
