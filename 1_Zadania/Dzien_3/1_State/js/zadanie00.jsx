import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello World',
        }
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({
                text: 'Hi, Everyone!',
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }


    render() {
        return <h1>{this.state.text}</h1>
    }
}

class App extends React.Component {
    render() {
        return <HelloWorld/>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});