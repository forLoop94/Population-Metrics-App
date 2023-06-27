import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const countries = useSelector((state) => state.countries.countriesData);

  const { id } = useParams();
  const index = countries.findIndex((country) => country.id === +id);

  return (
    <div>
      <h3>{countries[index].flag}</h3>
      <h3>{countries[index].name}</h3>

      <div>
        <span>Population:</span>
        <span>{countries[index].population}</span>
      </div>
      <div>
        <span>Region:</span>
        <span>{countries[index].region}</span>
      </div>
      <div>
        <span>Country code:</span>
        <span>{countries[index].id}</span>
      </div>
    </div>
  );
};

export default CountryDetails;
