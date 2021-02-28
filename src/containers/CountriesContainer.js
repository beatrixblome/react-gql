
import React       from 'react';
import { CountryList } from '../components/Country/CountryList';

export function CountriesContainer({countries}) {
    if ( ! countries.map ) return console.log(countries)
return (
<div>
    <div className="container">
        { countries && countries.map(country => <CountryList key={country.name} country={country}/>)}
    </div>
</div> )}