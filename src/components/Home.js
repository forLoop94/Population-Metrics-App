// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchCountries,
  fetchCountry,
} from '../redux/countries/countriesSlice';
import Countries from './Countries';
import africa from '../images/africa.png';

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
    <main>
      <section>
        <div className="headline">
          <img src={africa} alt="African Map" className="african-map" />
          <div className="title">
            <h3>Africa</h3>
            <p>1.216 Billion</p>
            <div className="search">
              <input
                type="text"
                placeholder="country name"
                value={countryName}
                onChange={(e) => searchCountryName(e.target.value)}
              />
              <button type="button" onClick={handleClick}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="country-section-title">See All Countries</h3>
        <Countries />
      </section>
    </main>
  );
};

export default Home;
