import React from 'react';
import ReactDOM from 'react-dom';
import {ShopList} from "./ShopList.jsx";


const myList = [
    {
        title   :   'Mysz komputerowa',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg'
    },
    {
        title   :   'Klawiatura',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
    },
    {
        title   :   'Laptop programisty',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
    }
];


class App extends React.Component {
    render() {
        return <ShopList array={myList} />
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});