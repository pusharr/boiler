import React from 'react'
import Square from './Square'

const style = {
  border: '2px solid grey',
  borderRadius: '3px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ squares, onClick, winnerLine }) => {
  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Square
          key={i}
          winnerLine={winnerLine && winnerLine.includes(i)}
          value={square}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  )
}

export default Board
