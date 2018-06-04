import React,{Fragment} from 'react'
import './Header.css'

export const Header = () => (
  <Fragment>
    <div class='container text-center'>
      <h1> Clicky Game! </h1>
      <h2> Click on an image to earn points, but don't click on any more than once! </h2>
    </div>
  </Fragment>
)

export default Header