import React from 'react';
import ReactDOM from 'react-dom';

/*class App extends React.Component {


    }

    render() {
        const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';
        return <img src={imageUrl} alt="green hair"/>
    }
}*/

class App extends React.Component {

    render() {
        const getColor = (x, y) => {
            const result = window.prompt('Jaki kolor ramki?');
            const validColors = ['red', 'green', 'blue'];
            if(validColors.indexOf(result) === -1) {
                return <div>Nieprawidłowy kolor</div>
            } else {
                return <div style={{
                    width: '100px',
                    height: '100px',
                    border: '5px solid ' + result
                }}>


                </div>
            }
        };
        return getColor();
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});