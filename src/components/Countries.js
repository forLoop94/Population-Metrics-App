import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const Countries = () => {
  const countriesArr = useSelector((state) => state.countries.countriesData);
  return (
    <div>
      <ul>
        {
          countriesArr.map((country) => (
            <Country
              key={country.id}
              name={country.name}
              flag={country.image}
              region={country.subregion}
              population={country.population}
              id={country.id}
              languages={country.languages}
              capital={country.capital}
              timezone={country.timezone}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default Countries;
