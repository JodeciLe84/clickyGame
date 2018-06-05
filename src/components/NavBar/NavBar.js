import React, { Fragment } from 'react'
import './NavBar.css'

const Nav = props => (
  <Fragment>
    <div class="container py-4">
      <div class="row">
        <div class="col-sm-4">
          <a href=".">Clicky game</a>
        </div>
        <div class="col-sm-4">
          Click an image to begin!
        </div>
        <div class="col-sm-4">
          Score: {props.score} | Top Score: {props.highscore}
        </div>
      </div>
    </div>
  </Fragment>
)

export default Nav