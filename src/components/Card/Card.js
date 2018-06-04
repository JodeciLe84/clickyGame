import React from 'react'
import './Card.css'

const Card = props => (
  <div
    className="" id="card"
    onClick={() => props.handleOnClick(props.id)}
    >

    <img
    // className=""
    alt={props.name}
    src={props.image}
    />

  </div>
)

export default Card