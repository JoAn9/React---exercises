import React from 'react';
import ReactDOM from 'react-dom';

class LifeCyclesTester extends React.Component {

    constructor(props) {
        super(props);
        console.log("konstruktor");
    }

    componentWillMount() {
        console.log("komponent będzie zamontowany");
    }

    componentDidMount() {
        console.log("komponent został zamontowany");
    }

    componentWillUnmount() {
        console.log("komponent odmontowywany");
    }

    render() {
        console.log("renderowanie");
        return <h1>Hello You</h1>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <LifeCyclesTester />,
        document.getElementById('app')
    );
});