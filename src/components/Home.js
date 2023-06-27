// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries, fetchCountry } from '../redux/countries/countriesSlice';
import Countries from './Countries';

const Home = () => {
  const [countryName, searchCountryName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    if (countryName !== '') {
      setTimeout(() => {
        dispatch(fetchCountry(countryName));
      }, 1000);
    } else {
      dispatch(fetchCountries());
    }
  }, [countryName]);

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <h2>Africa</h2>
      <p>All Countries</p>
      <input
        type="text"
        placeholder="country name"
        value={countryName}
        onChange={(e) => searchCountryName(e.target.value)}
      />
      <button type="button" onClick={handleClick}>Clear</button>
      <Countries />
    </div>
  );
};

export default Home;
