import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({
  id, name, flag,
}) => (
  <div className="grid-item">
    <Link to={`/country/${id}`} key={id}>
      <div>
        <img src={flag} alt={name} className="flag" />
      </div>
    </Link>
    <h2>{name}</h2>
  </div>
);

Country.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
