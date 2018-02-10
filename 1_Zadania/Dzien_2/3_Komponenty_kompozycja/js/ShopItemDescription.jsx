import React from 'react';
import ReactDOM from 'react-dom';


export class ShopItemDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <article>
            <p>{this.props.description}</p>
        </article>
    }
}

