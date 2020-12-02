import React from 'react';
import './App.css';
import quizimg from '../src/img/quiz.svg';
import Results from '../src/components/Results/Results';
import Question from '../src/components/Question/Question';


class App extends React.Component {
  
  state = {
    counter: 0,
    lose: false,
    key:0
  }
  
  handleNext = (lose) => {
      this.setState({
        key: this.state.key + 1,
        lose: lose
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
          <Results counter={this.state.counter} reset={()=> this.setState({counter: 0, lose: false, key:0})}/>
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
