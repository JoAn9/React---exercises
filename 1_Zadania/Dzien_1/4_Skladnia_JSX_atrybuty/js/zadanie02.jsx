import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    //Nie modyfikuj kodu powyżej

    const numberA = genNumber();
    const numberB = genNumber();
    const result = parseInt(prompt('Jaki jest wynik dodawania ' + numberA + ' i ' + numberB + '?'));

    const askUser = (x,y,z) => {
        if((x + y) === z) {
            return <div style={{backgroundColor: 'green'}}>Odpowiedź poprawna</div>;
        } else {
            return <div style={{backgroundColor: 'red'}}>Odpowiedź błędna</div>;
        }
    };

    ReactDOM.render(
        askUser(numberA, numberB, result),
        document.getElementById('app')
    );
});