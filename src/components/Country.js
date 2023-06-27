import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({
  id, name, flag,
}) => (
  <div>
    <Link to={`/country/${id}`} key={id}>
      <div>
        <span>Flag:</span>
        <span>{flag}</span>
      </div>
    </Link>
    <h2>{name}</h2>
    <div>
      <span>Country:</span>
      <span>{name}</span>
    </div>
  </div>
);

Country.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  // region: PropTypes.string.isRequired,
  // population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;