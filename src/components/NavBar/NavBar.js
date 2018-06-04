import React, { Fragment } from 'react'

const Nav = props => (
  <Fragment>
    <div class="container py-4">
      <div class="row">
        <div class="col-sm-4">
          <a href="#">Clicky game</a>
        </div>
        <div class="col-sm-4">
          Click an image to begin!
        </div>
        <div class="col-sm-4">
          Score: 0| Top Score: 0
        </div>
      </div>
    </div>
  </Fragment>
)

export default Nav