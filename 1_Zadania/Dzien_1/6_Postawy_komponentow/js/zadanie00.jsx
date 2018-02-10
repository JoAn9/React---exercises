import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {

    render() {
        return (
            <div>
                <input type="text"/>
                <button>Wyszukaj</button>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Search />,
        document.getElementById('app')
    );
});