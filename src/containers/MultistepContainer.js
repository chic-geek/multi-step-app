import React from 'react';
import questions from '../data/questions';

import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswerContainer';
import ButtonContainer from './ButtonContainer';
import StepsContainer from './StepsContainer';

class MultistepContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentQuestionIndex : 1,
        };
    }

    render() {
        const answers = questions.map(answer => (
            {
                id : answer.id,
                answer : answer.answer
            }
        ));

        return(
            <div className="multstepContainer">
                <QuestionContainer
                    currentQuestionIndex={this.state.currentQuestionIndex}
                    questions={questions} />

                <AnswerContainer
                    currentQuestionIndex={this.state.currentQuestionIndex}
                    handleInputChange={this._handleInputChange}
                    answers={answers} />

                <ButtonContainer
                    prevStep={this._prevStep}
                    nextStep={this._nextStep} />

                <StepsContainer
                    questions={questions}
                    currentQuestionIndex={this.state.currentQuestionIndex}
                    findStep={this._findStep} />
            </div>
        );
    }

    _prevStep = () => {
        if (this.state.currentQuestionIndex !== 1) {
            this.setState({ currentQuestionIndex : this.state.currentQuestionIndex - 1 });
        }
    }

    _nextStep = () => {
        if (this.state.currentQuestionIndex < questions.length) {
            this.setState({ currentQuestionIndex : this.state.currentQuestionIndex + 1 });
        }
    }

    _findStep = (event, questionId) => {
        event.preventDefault();
        this.setState({ currentQuestionIndex : questionId });
    }

    _handleInputChange = (e) => {
        const name = e.target.name;
        const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;

        this.setState({ [name] : value });
    }
}

export default MultistepContainer;
