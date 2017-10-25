import React from 'react';
import Question from '../components/Question';

class QuestionContainer extends React.Component {
    render() {

        const question = this.props.questions.filter(question => (
            question.id === this.props.currentQuestionIndex
        ))[0].question;

        return(
            <div className="questionContainer">
                <Question question={question} />
            </div>
        );
    }
}

export default QuestionContainer;
