import React from 'react';
import ReactDOM from 'react-dom';


export class ShopList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const elements = this.props.array.map(el => {
            return <li key={el.title}>
                {el.title} <img src={el.image} alt="item" style={{width: "200px"}} />
            </li>
        });

        return <ul>{elements}</ul>
    }
}
