import React from 'react';
import ReactDOM from 'react-dom';


class CrazyDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomTop: '5px',
            randomLeft: '5px'
        }
    }

    handleDivMouseEnter = () => {
       this.setState({
           randomTop: Math.floor((Math.random() * 1000) + 1) + 'px',
           randomLeft: Math.floor((Math.random() * 1000) + 1) + 'px'
       })
    } ;

    render() {
        return (
            <div style={{position: 'relative'}}>
                <div style={{
                    backgroundColor: 'red',
                    height: '100px',
                    width: '100px',
                    position: 'absolute',
                    top: this.state.randomTop,
                    left: this.state.randomLeft
                }}
                     onMouseEnter={this.handleDivMouseEnter}>
                </div>
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return <CrazyDiv />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});