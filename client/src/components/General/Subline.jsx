import React from 'react'

function Subline(props) {
  return (
    <p className={`text-custom-gray text-lg ${props.className}`}>{props.children}</p>
  )
}

export default Subline
