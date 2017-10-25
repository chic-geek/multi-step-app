import React from 'react';
import Answer from '../components/Answer';

class AnswerContainer extends React.Component {
    render() {

        const answer = this.props.answers.filter(answer => (
            answer.id === this.props.currentQuestionIndex
        ))[0];

        return(
            <div className="answerContainer">
                <Answer
                    {...this.props}
                    answer={answer}
                />
            </div>
        );
    }
}

export default AnswerContainer;
