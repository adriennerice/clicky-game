import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MemoryCard from "./components/MemoryCard";
import friends from "./friends.json";

class App extends Component {
  
 state = {
    friends,
    score: 0,
    topScore: 0,
    message: 'Click an image to begin!',
    clickedList: []
  };
  
  // Lifecycle method - occurs when main component is refressed 
  componentDidMount(){
    const { friends } = this.state;
    this.shuffleCards(friends);
  }

  // Method to process the game when a card is clicked
  handleClick = (id) => {

    const { clickedList, score, friends, topScore } = this.state;
    this.shuffleCards(friends);

    let correctGuessMessage = this.state.message;
    correctGuessMessage = 'You guessed correctly!';
    let wrongGuessMessage = this.state.message;
    wrongGuessMessage = 'You guessed incorrectly!';
    
    const isClicked = clickedList.includes(id);
    
    const bestScore = Math.max(score, topScore)
    if (isClicked) {
      
      this.resetGame(bestScore)

      this.setState({
        message: wrongGuessMessage
      })
    } else {
      const newScore = score + 1;

      this.setState({
        clickedList: [...clickedList, id],
        score: newScore,
        message: correctGuessMessage
      })
    
      if(newScore === friends.length){
        this.resetGame(newScore)
      }
    }
  }

  // Method to randomly shuffle the cards 
  shuffleCards = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    this.setState({
      friends: array
    })  
  }

  // Method to restart a new game 
  resetGame = (highscore) => {
    const message = 'Click an image to begin!'
    this.setState({
      score: 0,
      clickedList: [],
      topScore: highscore,
      message: message
    })
  }

  // Method to display the components 
  render() {
    return (
      <div className="App">
          <NavBar score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
          <Header />
          <Main>
            {this.state.friends.map(friend => (
              <MemoryCard
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                handleClick={this.handleClick}
              />
            ))}
          </Main>
          <Footer />
      </div>
    );
  }
}

export default App;

 // 1) When card clicked check if unique id is in selectedCards 
  // - if in array then game over
  //    - check if current score is greater than topScore
  //         - if greater save score as current topScore
  //    - display game over to screen
  //    - startNewGame()
  //       - reset score to zero
  //       - shuffle cards - random array
  //       - render to page
  // 2) if not in array
  //    - Check if wonGame()
  //    - increase score counter by 1
  //    - add id to selectedCards
  //    - shuffle cards - random array
  //    - render to page