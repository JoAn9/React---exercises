import React from 'react';
import ReactDOM from 'react-dom';
import {ShopItem} from './ShopItem.jsx'

class App extends React.Component {
    render() {
        return <ShopItem />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});