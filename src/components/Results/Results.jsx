import React from 'react';
import win from '../../img/win.svg';

class Results extends React.Component {

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