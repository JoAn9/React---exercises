import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Klik!',
            width: 'auto'
        }
    }


    handleButton1Click() {
        console.log('Pierwszy przycisk kliknięty');
    }

    handleButton2Click = () => {
        this.setState({
            text: 'Click!'
        })
    }

    handleButton3Click = () => {
        this.setState({
            width: '300px'
        })
    }

    render() {
        return <div>
            <button onClick={this.handleButton1Click}>
                {this.state.text}
            </button>
            <button onClick={this.handleButton2Click}>
                {this.state.text}
            </button>
            <button
                onClick={this.handleButton3Click}
                style={{width: this.state.width}}>
                {this.state.text}
            </button>
        </div>

    }
}

class App extends React.Component {
    render() {
        return <Button />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});