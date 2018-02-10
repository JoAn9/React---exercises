import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00_02';

const list = people.map((person,i) => {
    return <li key={i}>{person.name} {person.surname}</li>
});



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <h1>{list}</h1>,
        document.getElementById('app')
    );
});