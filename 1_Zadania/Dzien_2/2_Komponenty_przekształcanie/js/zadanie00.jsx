import React from 'react';
import ReactDOM from 'react-dom';

class AddNumbers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sum = this.props.numberA + this.props.numberB;
        return <div> {sum} </div>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <AddNumbers numberA={2} numberB={3} />
        </div>;
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});

