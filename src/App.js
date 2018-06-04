import React, { Component, Fragment } from 'react';
import './App.css';
import Nav from './components/NavBar'
import Header from './components/Header'
import Card from './components/Card'
// import Main from './components/Main/Main'


class App extends Component {
  render() {
    return (
      <Fragment >
        

          <Nav id='content' />
            <Header />
              <main>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </main>

        
        
      <footer id='footer' > <p> Sticky Game </p></footer>
      </Fragment>
    );
  }
}

export default App;
