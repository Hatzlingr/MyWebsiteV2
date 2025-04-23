import React from 'react'

const Button = ({onClick, text, styleClass}) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-4xl shadow-md bg-blue-500 text-white hover:text-blue-500 hover:bg-white transition-colors ${styleClass}`}>{text}</button>
  )
}

export default Button