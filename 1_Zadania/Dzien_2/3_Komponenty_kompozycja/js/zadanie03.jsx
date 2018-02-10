import React from 'react';
import ReactDOM from 'react-dom';


class Button extends React.Component {

    render() {
        return <button>{this.props.text}</button>
    }
}

class Message extends React.Component {

    render() {
        return <div>
            <Button text="TAK" />
            <Button text="NIE" />
            <p>{this.props.messageText}</p>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <div>
            <Message messageText="Jestem super wiadomość"/>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});