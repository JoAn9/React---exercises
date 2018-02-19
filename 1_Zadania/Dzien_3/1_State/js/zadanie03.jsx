import React from 'react';
import ReactDOM from 'react-dom';

class StrobeLight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChanged: false,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                isChanged: this.state.isChanged ? false : true,
            });
        }, this.props.frequency);
    }

    render() {
        return <div style={{width: "500px", height: "500px", backgroundColor: this.state.isChanged ? this.props.color : "yellow"}}>
        </div>
    }
}


class App extends React.Component {
    render() {
        return <StrobeLight color="violet" frequency={1000} />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});