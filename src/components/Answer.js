import React from 'react';
import InputDropdown from './InputDropdown';
import InputRadio from './InputRadio';
import InputText from './InputText';

const Answer = ({
    answer
}) => {

    const answerObj = answer.answer;
    const answerType = answerObj.type;
    const answerOptions = answerObj.options;
    const answerLabel = answerObj.label;

    switch (answerType) {
        case 'dropdown':
            return (
                <div className="formField">
                    <InputDropdown
                        label={answerLabel}
                        options={answerOptions}
                        handleInputChange={''}
                    />
                </div>
            );

        case 'radio':
            return (
                <div className="formField">
                    <InputRadio
                        options={answerOptions}
                    />
                </div>
            );

        case 'textInput':
            return (
                <div className="formField">
                    <InputText />
                </div>
            );

        case 'numberInput':
            return (
                <div className="formField">
                    <InputText />
                </div>
            );

        default: return '';
    }
};

export default Answer;
