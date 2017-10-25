import React from 'react';

class StepsContainer extends React.Component {
    render() {

        const steps = this.props.questions.map(question => {
            return question.id === this.props.currentQuestionIndex ?
                <li key={question.id}>
                    <button
                        className="stepsButton"
                        onClick={(event) => this.props.findStep(event, question.id)}>
                        <strong>Question #{question.id}</strong>
                    </button>
                </li>
                :
                <li key={question.id}>
                    <button
                        className="stepsButton"
                        onClick={(event) => this.props.findStep(event, question.id)}>
                        Question #{question.id}
                    </button>
                </li>
        });

        return(
            <div className="stepsContainer">
                <ul className="well">
                    {steps}
                </ul>
            </div>
        );
    }
}

export default StepsContainer;
