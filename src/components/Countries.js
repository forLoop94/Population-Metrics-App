import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const Countries = () => {
  const countriesArr = useSelector((state) => state.countries.countriesData.countries);
  return (
    <div>
      <h2>Africa</h2>
      <p>All Countries</p>
      <ul>
        {
          countriesArr.map((country) => (
            <Country
              key={country.id}
              name={country.name}
              flag={country.flag}
              region={country.region}
              population={country.population}
              id={country.id}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default Countries;
