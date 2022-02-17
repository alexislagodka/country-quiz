import React from 'react';
import win from '../../img/win.svg';
import confetti from 'canvas-confetti';

class Results extends React.Component {

  componentDidMount(){
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

    render(){
        const {counter} = this.props;

        return <div className="results">
        <div><img className="results-img" src={win} alt="win"/></div>
        <div><h3>Results</h3></div>
        <div>You got <h4>&nbsp;{counter}&nbsp;</h4>correct answers</div>
        <div>
          <button 
            className="tryAgain-button" 
            onClick={()=> this.props.reset()}>Try again</button>
        </div>
      </div>
    }
}

export default Results;