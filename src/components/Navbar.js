import React from 'react';
import { PropTypes } from 'prop-types';
import { FaChevronLeft, FaCog } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { children } = props;
  return (
    <header>
      <div className="nav-left">
        <Link to="/">
          <FaChevronLeft fontSize="15px" />
        </Link>
        <p className="year">2023</p>
      </div>
      <div>{children}</div>
      <div className="extreme-right">
        <FaMicrophone fontSize="15px" />
        <FaCog fontSize="15px" />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Navbar;
