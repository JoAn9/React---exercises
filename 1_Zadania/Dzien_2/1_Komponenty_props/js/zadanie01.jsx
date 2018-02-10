import React from 'react';
import ReactDOM from 'react-dom';

class AddNumbers extends React.Component {

    render() {
        return <h1>
            {+this.props.numberA + +this.props.numberB}
        </h1>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <AddNumbers numberA="5" numberB="15"/>,
        document.getElementById('app')
    );
});