import React from 'react';
import ReactDOM from 'react-dom';
import {ShopItemHeader} from './ShopItemHeader.jsx'
import {ShopItemDescription} from './ShopItemDescription.jsx'
import {ShopItemPricing} from './ShopItemPricing.jsx'



export class ShopItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ShopItemHeader title="ogórki" />
            <ShopItemDescription description="bardzo zdrowa żywność" />
            <ShopItemPricing price="0.99 pln"/>
        </div>
    }
}

