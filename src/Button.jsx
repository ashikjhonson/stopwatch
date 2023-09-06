import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div className='button-div'>
        <button className={props.title} onClick={props.onClick}> {props.title} </button>
    </div>
  )
}

export default Button