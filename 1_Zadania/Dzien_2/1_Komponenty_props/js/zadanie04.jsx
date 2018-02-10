import React from 'react';
import ReactDOM from 'react-dom';

const menu = [
    {
        urL     :   '/',
        text    :   'Strona główna'
    },
    {
        urL     :   '/blog',
        text    :   'Blog'
    },
    {
        urL     :   '/pricing',
        text    :   'Cennik'
    },
    {
        urL     :   '/contact',
        text    :   'Kontakt'
    }
];

class Menu extends React.Component {

    render() {
        const els = this.props.array.map((el, url) => {
            return <li key={el.urL}>
                <a href={el.urL}>
                    {el.text}
                </a>
            </li>
        });
        return <ul>{els}</ul>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Menu array={menu}/>,
        document.getElementById('app')
    );
});