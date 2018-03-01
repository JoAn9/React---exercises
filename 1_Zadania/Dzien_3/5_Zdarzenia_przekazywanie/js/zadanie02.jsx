import React from 'react';
import ReactDOM from 'react-dom';

class ShopItem extends React.Component {

    handleBuyClick = () => {
        if(typeof this.props.onBuy === 'function') {
            this.props.onBuy(this.props.title)
        }
    };

    render() {
        return <div>
            <h1>{this.props.title}</h1>
            <button onClick={this.handleBuyClick}>Kup</button>
        </div>
    }
}


class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boughtItems: []
        }
    }

    handleItem = (itemTitle) => {

        //ES5:
        // const boughtItemsCopy = this.state.boughtItems.slice();
        // boughtItemsCopy.push(itemTitle);
        // this.setState({
        //     boughtItems : boughtItemsCopy,
        // });

        this.setState({
            boughtItems: [...this.state.boughtItems, itemTitle]
        })
    };

    render() {

        return <div>
            <ShopItem onBuy={this.handleItem}
                      title="skarpetki" />
            <ShopItem onBuy={this.handleItem}
                      title="koszula" />
            <ShopItem onBuy={this.handleItem}
                      title="pończochy" />
            <ul>Lista zakupów:
                {this.state.boughtItems.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <Shop />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});