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
    <button type="button" style={winnerLine ? winStyle : style} onClick={onClick}
      className="bg-blue-500 hover:bg-blue-300 font-bold py-1 px-2 outline-none focus:outline-none transform hover:scale-99 motion-reduce:transform-none"
    >
      {value}
    </button>
  )
}

export default Square
