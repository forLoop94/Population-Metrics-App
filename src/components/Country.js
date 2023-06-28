import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({
  id, name, flag, index,
}) => (
  <Link to={`/country/${id}`} key={id}>
    <div className={index % 2 === 0 ? 'light-cards' : 'dark-cards'}>
      <div>
        <img src={flag} alt={name} className="flag" />
      </div>
      <h2 className="country-name">{name}</h2>
    </div>
  </Link>
);

Country.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  // region: PropTypes.string.isRequired,
  // population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
