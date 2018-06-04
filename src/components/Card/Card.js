import React from 'react'
import './Card.css'

const Card = props => (
  <div className="card">
    <img className="card-img-top" src="{prop.image}" alt="Card image cap" />
  </div>
)

export default Card