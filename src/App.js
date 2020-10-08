import React from 'react';
import './App.css';
import quizimg from './img/quiz.svg';
import win from './img/win.svg';
import Question from './Question';


class App extends React.Component {
  
  state = {
    counter: 0,
    lose: false,
    key:0
  }
  
  handleNext = (lose) => {
      this.setState({
        key: Math.floor(Math.random() * Math.floor(1000)),
        lose:lose
      })
  }

  render(){
    return <div className="App">
      <div className="main">
        <div className ="header-card">
          <h1>COUNTRY QUIZ</h1>
          <img className="quiz-img" src={quizimg} alt="quizimg"></img>
        </div>
        <div className="quiz-card">
          { this.state.lose ?
          <div className="results">
            <div><img className="results-img" src={win} alt="win"/></div>
            <div><h3>Results</h3></div>
            <div>You got <h4>&nbsp;{this.state.counter}&nbsp;</h4>correct answers</div>
            <div>
              <button 
                className="tryAgain-button" 
                onClick={()=> this.setState({counter: 0, lose: false, key:0})}>Try again</button>
            </div>
          </div>
          :
          <Question 
            key={this.state.key}
            addScore={() => (this.setState({counter: this.state.counter + 1}))}
            handleNext={(lose)=> this.handleNext(lose)}
            /> 
          }
        </div>
      </div>
      <div className="footer">
        By Alexis Lagodka © 2020
      </div>
    </div>
  }
}


export default App;
