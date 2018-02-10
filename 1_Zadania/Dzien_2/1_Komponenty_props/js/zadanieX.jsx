import React from 'react';
import ReactDOM from 'react-dom';
import countries from './zadanieX_00';

const allCountries = countries.map((country) => {
    return (
        <option	key={country.code} value={country.name}>
            {country.name} ({country.code})
        </option>
    )
});

class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input : '',
            shownCountries: allCountries,
            choise: '',
        };
    }

    componentDidMount(){
        this.nameInput.focus();
    }

    handleInputChange = event => {

        let selectedCountries = countries.filter(item =>
            item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0 ||
            item.code.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0);

        let shownSelectedCountries = selectedCountries.map((country) => {
            return (
                <option key={country.code} value={country.name}>
                    {country.name} ({country.code})
                </option>
            )
        });

        this.setState({
            input : event.target.value,
            shownCountries: shownSelectedCountries,
        });
    };

    handleCountryChange = event => {
        this.setState({
            choise : event.target.value,
            input : event.target.value,
        })
    };

    handleInputBlur = event => {

        if(this.state.shownCountries.length < 1) {
            this.setState({
                input: '',
            })
        }
    };

    render() {
        return <form>
            <label>Kraj:
                <input className="form-control form-control-lg"
                       style={{fontSize: "3rem"}}
                       type="text"
                       value={this.state.input}
                       onChange={this.handleInputChange}
                       placeholder="Tutaj wpisz kraj"
                       ref={(input) => { this.nameInput = input; }}
                       onBlur={this.handleInputBlur} />
            </label>
            <br/>
            <label>
                <h2>Kraje do wyboru:</h2>
                <select value={this.state.choise}
                        onChange={this.handleCountryChange}>
                    {this.state.shownCountries}
                </select>
            </label>
        </form>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Country />,
        document.getElementById('app')
    );
});

/*
Proszę za pomocą ReactJS napisać komponent typu autocomplete.
    Komponent powinien składać z pola tekstowego oraz listy podpowiedzi wyświetlanej
tuż pod tym polem. Dla potrzeb tego zadania proszę przyjąć, że pole służy
wybieraniu kraju. Listę możliwych krajów można pobrać z
https://gist.github.com/Keeguon/2310008. Podczas edytowania pole powinno
    wyświetlać na liście kraje, których nazwa lub kod rozpoczynają się od wpisanej
frazy. Powinny one być prezentowane w formacie „Nazwa kraju (kod)”, czyli np.
„Poland (PL)”. Pole powinno pozwalać wybierać wartości tylko i wyłącznie z listy
możliwych krajów. W przypadku, gdy żaden kraj nie pasuje do wpisanej frazy, a
pole straci focus, wartość inputa powinna być czyszczona. Komponent NIE musi
obsługiwać klawiatury za wyjątkiem klawiszy TAB oraz Enter, których wciśnięcie
ma powodować wybranie pierwszego kraju z listy krajów pasujących do wpisanej
    frazy. W ramach tego zadania proszę napisać, krótki przykład pokazujący sposób w
jak programista może obsłużyć wybranie kraju za pomocą tego pola. Proszę w
podstawowym zakresie ostylować komponent.
    Proszę komponent napisać od zera, nie używając gotowych rozwiązań typu
autocomplete. Można natomiast korzystać z innych bibliotek jak np. underscore,
    mori itp.*/