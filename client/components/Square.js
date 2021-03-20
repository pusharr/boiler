import React from 'react'

const style = {
  background: 'ivory',
  border: '1px solid grey',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
}

const winStyle = {
  background: 'lightgreen',
  border: '1px solid grey',
  fontSize: '30px',
  color: 'darkblue',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
}
const Square = ({ value, onClick, winnerLine }) => {
  return (
    <button type="button" style={winnerLine ? winStyle : style} onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
