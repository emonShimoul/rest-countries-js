const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
    console.log(countryHTML[0]);
}
const getCountryHTML = country => {
    const {name, capital, flags} = country;
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <h4>Capital: ${capital}</h4>
            <img src="${flags.png}">
        </div>
    `
}

loadCountries();