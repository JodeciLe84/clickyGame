import React, { Component, Fragment } from 'react';
import './App.css';
import Nav from './components/NavBar'
import Header from './components/Header'
import Card from './components/Card'
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score})
    }
    this.state.cards.forEach(card => {
      card.clicked = false
    })
    alert(`Game Over
    Score: ${this.state.score}`);
    this.setState({score : 0})
    this.state.cards.sort(() => Math.random() -0.5)
    return true;
  }

  handleOnClick = id => {
    this.state.cards.find((obj, i) => {
      if (obj.id == id) {
        if(!obj.clicked) {
          obj.clicked = !cards[i].clicked
          this.setState({score : this.state.score + 1})
          this.state.cards.sort(() => Math.random() -0.5)
          return true;
        } else {
          this.gameOver()
        }
      }
    })
  }

  render() {
    return (
    <Fragment >
      <Nav id='content'
        score = {this.state.score}
        highscore = {this.state.highscore}
      />
        <Header />
          <main>
            {this.state.cards.map(card => (
              <Card
                handleOnClick={this.handleOnClick}
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
          </main>

    <footer id='footer' > <p> Sticky Game </p></footer>

    </Fragment>
    );
  }

}

export default App;
