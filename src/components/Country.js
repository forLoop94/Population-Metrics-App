import React from 'react';
import { PropTypes } from 'prop-types';

const Country = ({
  id, name, region, flag, population,
}) => (
  <>
    <h2>{name}</h2>
    <div>
      <span>Country:</span>
      <span>{name}</span>
    </div>
    <div>
      <span>Flag:</span>
      <span>{flag}</span>
    </div>
    <div>
      <span>Population:</span>
      <span>{population}</span>
    </div>
    <div>
      <span>Region:</span>
      <span>{region}</span>
    </div>
    <div>
      <span>Country code:</span>
      <span>{id}</span>
    </div>
  </>
);

Country.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
