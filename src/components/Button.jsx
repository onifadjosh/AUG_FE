import React from 'react'

const Button = ({title, namee, color, func}) => {
  return (
    <button onClick={func} className={`btn ${color}`}>{namee}</button>
  )
}

export default Button