import React from 'react';
import ReactDOM from 'react-dom';

class AComponent extends React.Component {

    handleClickButton = (str) => {
        event.preventDefault();
        console.log(str);
    };

    render() {
        const str = 'To jest dowolny string';

        return <a href="#"
                  onClick={e => this.handleClickButton(str)}>
            To jest link
        </a>
    }
}



class App extends React.Component {
    render() {
        return <AComponent />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});