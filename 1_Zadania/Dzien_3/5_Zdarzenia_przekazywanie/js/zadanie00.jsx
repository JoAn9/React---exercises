import React from 'react';
import ReactDOM from 'react-dom';

class ButtonToClick extends React.Component {

    handleMyClick = () => {
        if(typeof this.props.clickMethod === 'function') {
            this.props.clickMethod();
        }
    };

    render() {
        return <button onClick={this.handleMyClick}>
            Click
        </button>
    }
}

class ButtonCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    handleBtnClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    };


    render() {
        return <div>
            <h1>{this.state.number}</h1>
            <ButtonToClick clickMethod={this.handleBtnClick} />
            <ButtonToClick clickMethod={this.handleBtnClick} />
        </div>
    }
}

class App extends React.Component {
    render() {
        return <ButtonCounter />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});