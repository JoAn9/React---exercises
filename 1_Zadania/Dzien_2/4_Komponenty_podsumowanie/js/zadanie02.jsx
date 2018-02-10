import React from 'react';
import ReactDOM from 'react-dom';
import shopping from './zadanie02';

class Receipt extends React.Component {

    render() {
        let result = 0;
        const items = shopping.map(el => {
            return <tr key={el.name}>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.count}</td>
                <td>{el.result = el.price*el.count}</td>
            </tr>
        });



        return <table>
            <tbody>
            <tr>
                <td>Nazwa</td>
                <td>Cena</td>
                <td>Ilość</td>
                <td>Łączna cena</td>
            </tr>
            {items}
            <tr>
                <td>RAZEM</td>
                <td>-</td>
                <td>-</td>
                <td>{result}</td>

            </tr>
            </tbody>
        </table>


    }
}

class App extends React.Component {
    render() {
        return <Receipt/>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
