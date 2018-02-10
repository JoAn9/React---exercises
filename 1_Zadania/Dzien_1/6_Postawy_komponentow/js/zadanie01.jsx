import React from 'react';
import ReactDOM from 'react-dom';

class LikeBox extends React.Component {

    render() {
        return (
            <div>
                <div>100 likes</div>
                <button>Lubię to</button>
            </div>
        )
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <LikeBox/>,
        document.getElementById('app')
    );
});