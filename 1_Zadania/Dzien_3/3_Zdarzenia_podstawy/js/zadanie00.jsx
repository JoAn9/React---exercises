import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {

    handleClickButton() {
        console.log('działa');
    }

    render() {
        return <button onClick={this.handleClickButton}>Kliknij!</button>
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