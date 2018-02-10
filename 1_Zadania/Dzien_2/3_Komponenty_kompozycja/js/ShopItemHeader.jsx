import React from 'react';
import ReactDOM from 'react-dom';


export class ShopItemHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>{this.props.title}</h1>

        </div>
    }
}

