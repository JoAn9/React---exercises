import React from 'react';
import ReactDOM from 'react-dom';

class Sum extends React.Component {

    render() {

        const array = this.props.numbers;
        function fn(prev, current) {
            return prev + current;
        }
        const sum = array.reduce(fn);

        return <h1>{sum}</h1>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Sum numbers={[1,2,3,4,5]}/>,
        document.getElementById('app')
    );
});