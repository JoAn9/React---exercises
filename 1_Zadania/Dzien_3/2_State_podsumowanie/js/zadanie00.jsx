import React from 'react';
import ReactDOM from 'react-dom';

const ClockTime = (props) => {
    return <h1>
        {props.date.toLocaleTimeString()}
    </h1>
};

const ClockDate = (props) => {
        return <h1>
            {props.date.toLocaleDateString()}
        </h1>
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <div>
            <ClockTime date={this.state.date} />
            <ClockDate date={this.state.date} />
        </div>
    }
}


class App extends React.Component {
    render() {
        return <Clock />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});