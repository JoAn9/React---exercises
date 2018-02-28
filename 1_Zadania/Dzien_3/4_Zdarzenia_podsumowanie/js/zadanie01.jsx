import React from 'react';
import ReactDOM from 'react-dom';


class Bulb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'On',
            color: 'green',
            isChanged: false
        }
    }

    btnClick = () => {
        if(!this.state.isChanged) {
            this.setState({
                text: 'Off',
                color: 'yellow',
                isChanged:true
            })
        } else {
            this.setState({
                text: 'On',
                color: 'white',
                isChanged: false
            })
        }
    };

    render() {
        return (
            <div style={{width: '100px', height: '100px', backgroundColor: this.state.color}}>
                <button onClick={this.btnClick}>{this.state.text}</button>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return <Bulb />
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});