import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Nie modyfikuj kodu powyżej

 //   let color = userColor;


    const redDiv = <div style={{
        height: '100px',
        width: '100px',
        border: '5px solid red',
    }}></div>;
    const greenDiv = <div style={{
        height: '100px',
        width: '100px',
        border: '5px solid green',
    }}></div>;
    const blueDiv = <div style={{
        height: '100px',
        width: '100px',
        border: '5px solid blue',
    }}></div>;



    //Nie modyfikuj kodu poniżej
    ReactDOM.render(
        <div>
            {redDiv}{greenDiv}{blueDiv}
        </div>,
        document.getElementById('app')
    );
});