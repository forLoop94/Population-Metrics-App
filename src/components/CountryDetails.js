import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const countries = useSelector((state) => state.countries.countriesData);

  const { id } = useParams();
  const index = countries.findIndex((country) => country.id === +id);

  return (
    <div className="details-container">
      <div className="country-details">
        <img src={countries[index].image} alt={countries[index].name} />
        <h3 className="details-name">{countries[index].name}</h3>

        <div className="details-list">
          <div>
            <span>Capital:</span>
            <span>{countries[index].capital}</span>
          </div>
          <div>
            <span>Population:</span>
            <span>{countries[index].population}</span>
          </div>
          <div>
            <span>Subregion:</span>
            <span>{countries[index].subregion}</span>
          </div>
          <div>
            <span>TimeZone:</span>
            <span>{countries[index].timezone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
