import React from 'react';
import ReactDOM from 'react-dom';

class ChatHeader extends React.Component {
    render() {
        return <header>
            <h1>Chat prywatny</h1>
        </header>
    }
}

class ChatMessages extends React.Component {
    render() {
        return <ul>
            <ChatMessage number="1"/>
            <ChatMessage number="2"/>
            <ChatMessage number="3"/>
        </ul>
    }
}

class ChatMessage extends React.Component {
    render() {
        return <li>Wpis z chatu {this.props.number}</li>
    }
}
class NewChatMessage extends React.Component {
    render() {
        return <footer>
            <input type="text"/>
            <button>Wyślij</button>
        </footer>
    }
}



class Chat extends React.Component{
    render(){
        return <div className="chat">
            <ChatHeader/>
            <ChatMessages/>
            <NewChatMessage/>
        </div>
    }
}

class App extends React.Component{
    render(){
        return <div>
            <Chat />
        </div>;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});