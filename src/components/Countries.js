import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const Countries = () => {
  const countriesArr = useSelector((state) => state.countries.countriesData);
  return (
    <div>
      <div className="grid-container">
        {
          countriesArr.map((country, index) => (
            <Country
              key={country.id}
              index={index}
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
      </div>
    </div>
  );
};

export default Countries;
