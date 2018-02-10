import React from 'react';
import ReactDOM from 'react-dom';


export class ShopItemPricing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <div>
            Cena: {this.props.price}
            <button>Kup!</button>
        </div>
    }
}
