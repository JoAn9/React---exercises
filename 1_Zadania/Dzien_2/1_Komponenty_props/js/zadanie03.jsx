import React from 'react';
import ReactDOM from 'react-dom';

class LikeBox extends React.Component {
    render() {
        return <div>
            <div>{this.props.likes} likes</div>
            <button>Lubię to</button>
        </div>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <LikeBox likes="100" />,
        document.getElementById('app')
    );
});