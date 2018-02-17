import React from 'react';
import ReactDOM from 'react-dom';

class TextTyper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shownText: '',
            count: this.props.text.length,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                shownText: this.props.text.slice(0,this.state.count),
                count: this.state.count - 1,
            });

            if(this.state.count === -1) {
                clearInterval(this.interval)
            }
        }, 250);
    }

    render() {
        return <h1>{this.state.shownText}</h1>
    }
}



class App extends React.Component {
    render() {
        return <TextTyper text="Witaj!" />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});