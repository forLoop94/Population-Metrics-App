import React from 'react';
import { PropTypes } from 'prop-types';
import { FaChevronLeft, FaCog } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { children } = props;
  return (
    <header>
      <Link to="/">
        <FaChevronLeft fontSize="12px" />
      </Link>
      <div>{children}</div>
      <div className="extreme-right">
        <FaMicrophone fontSize="12px" />
        <FaCog fontSize="12px" />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Navbar;
