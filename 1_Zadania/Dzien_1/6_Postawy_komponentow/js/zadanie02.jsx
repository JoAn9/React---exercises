import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {

    render() {
        return <ul>
            <li><a href="/">Strona główna</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/pricing">Cennik</a></li>
            <li><a href="/contact">Kontakt</a></li>
        </ul>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Menu/>,
        document.getElementById('app')
    );
});