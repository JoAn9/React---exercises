import React from 'react';
import ReactDOM from 'react-dom';


class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstIsVisible: true,
            secondIsVisible: false
        }
    }

    handleImgClick = () => {
        this.setState({
            firstIsVisible: false,
            secondIsVisible: true
        })
    };

    handleHideClick = () => {
        this.setState({
            firstIsVisible: true,
            secondIsVisible: false
        })
    };


    render() {
        return (
            <menu>
                <div onClick={this.handleImgClick}
                     style={{display: this.state.firstIsVisible ? 'block' : 'none'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Otwórz menu" />
                </div>
                <div style={{display: this.state.secondIsVisible ? 'block' : 'none'}}>
                    <ul>
                        <li>Menu 1...</li>
                        <li>Menu 2...</li>
                        <li>Menu 3...</li>
                        <li>Menu 4...</li>
                    </ul>
                    <div onClick={this.handleHideClick}>Schowaj menu</div>
                </div>
            </menu>
        )
    }
}


class App extends React.Component {
    render() {
        return <MobileMenu />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});