import './assets/styles.css';
import React from 'react';
import MultistepContainer from './containers/MultistepContainer';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Multi-stepped tool/application</h1>
                <MultistepContainer />
            </div>
        );
    }
}

export default App;
