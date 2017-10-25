import React from 'react';
import Button from '../components/Button';

class ButtonContainer extends React.Component {
    render() {
        return(
            <div className="buttonContainer">
                <Button
                    handleClick={this.props.prevStep}
                    buttonType={'button'}>
                    Prev
                </Button>

                <Button
                    handleClick={this.props.nextStep}
                    buttonType={'button'}>
                    Next
                </Button>
            </div>
        );
    }
}

export default ButtonContainer;
