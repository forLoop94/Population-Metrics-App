import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({
  id, name, flag, index, population,
}) => (
  <Link to={`/country/${id}`} key={id}>
    <div className={index % 2 === 0 ? 'light-cards' : 'dark-cards'}>
      <div>
        <img src={flag} alt={name} className="flag" />
      </div>
      <div className="country-name">
        <h2>{name}</h2>
        <p>{population}</p>
      </div>
      <FaArrowRight className="arrow" />
    </div>
  </Link>
);

Country.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
};

export default Country;
