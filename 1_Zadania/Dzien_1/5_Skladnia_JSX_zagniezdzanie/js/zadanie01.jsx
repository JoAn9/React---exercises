import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie01';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {
        render() {
            return (
                <div>
                    <h1>{ person.title + person.name + person.surname }</h1>
                    <span>{ person.age }</span>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});