import React from 'react';
import ReactDOM from 'react-dom';

class StrobeControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onOff: this.props.onOff
        }
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({
                onOff: false
            });
        }, 5000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutId);
    }

    render() {
        if(this.state.onOff) {
            return <StrobeLight color="violet" frequency={1000} />
        } else {
            return <div>by by</div>
        }
    }

}

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
        return <StrobeControl onOff={true} />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});