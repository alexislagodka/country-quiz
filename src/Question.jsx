import React from 'react';
import check from './img/check.svg';
import cross from './img/cross.svg';

class Question extends React.Component {

    region = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    letter = ["A", "B", "C", "D"];
    state = {
        data : [],
        question : "",
        answer : "",
        answers : [],
        counter : 0,
        disable : false,
        showNext : false,
        lose :false
    }
    componentWillMount() {
        const random = Math.floor(Math.random() * this.region.length);
        const region = this.region[random];
        
        fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
            data : data
            });
            this.generateQuestion();
        })
        .catch(function (err) {
        console.log('Something went wrong.', err);
        });
    }

    generateQuestion = () => {
        const typeOfQuestion = Math.round(Math.random()); // Output 0: capital question or 1: flag question
        const random = Math.floor(Math.random() * this.state.data.length);
        
        const country = this.state.data[random].name;
        const flag = this.state.data[random].flag;
        const capital = this.state.data[random].capital;
        const answer = country;

        var question;
        var answers = [country];

        if (typeOfQuestion === 0){
            question = <div className="question-container">
                <img className="flag-img" src={flag} alt="flag"/>
                <div className="question">Wich country does this flag belong to ? </div>
            </div>
        } else {
            question = <div className="question-container">
                <div className="question">{capital} is the capital of ?</div>
            </div>
        }

        for (var n=0;n<=2;n++){
            const random = Math.floor(Math.random() * this.state.data.length);
            const country = this.state.data[random].name;
            answers.push(country); 
        }
        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
          }

        shuffle(answers);
       
        this.setState({
            question : question,
            answer : answer,
            answers : answers
        });
    }
    
    handleClickAnswer(answer) {
        var crossImg = document.createElement("img");
        crossImg.src = cross;
        var checkImg = document.createElement("img");
        checkImg.src = check;
       
        if (this.state.disable === false){
          
            if (answer === this.state.answer) {

                document.getElementById(this.state.answer).style.background = "#60BF88";
                document.getElementById(this.state.answer).children[2].appendChild(checkImg);
                this.props.addScore();

            } else {

                document.getElementById(this.state.answer).style.background = "#60BF88";
                document.getElementById(this.state.answer).children[2].appendChild(checkImg);
                document.getElementById(answer).style.background = "#EA8282";
                document.getElementById(answer).children[2].appendChild(crossImg);
                this.setState({
                    lose: true
                })

            }

            this.setState({
                disable:true,
                showNext: true
            })
        }
      }
    render(){
        
        return <div className="question-component"> 
            {this.state.question}
            
            <div className="answer-container" id="answer-container">
            {this.state.answers.map( (answer, index) => (
                    <button disabled={this.state.disable} key={index}  className="answer-button" id={answer} value={answer} onClick={() => this.handleClickAnswer(answer)}>
                                <div value={answer} className="letter">{this.letter[index]}</div>
                                <div value={answer} className="answer">{answer}</div>
                                <div value={answer} className="icon"></div>
                    </button>
            ))}
            </div>
            <div className="next-button-container">
                {this.state.showNext ? <button className="next-button" onClick={() => this.props.handleNext(this.state.lose)}>Next</button> : ""}
            </div>
        </div>
    }
}
export default Question