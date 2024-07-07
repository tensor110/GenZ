import React from 'react'
import '../../styles/TextGradient.css'

function Heading(props) {
  return (
    <h2 className={`gradient-text ${props.className}`}>{props.children}</h2>
  )
}

export default Heading
