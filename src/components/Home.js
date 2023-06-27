import React, { useState } from 'react';

const Home = () => {
  const [countryName, searchCountryName] = useState('');
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
    </div>
  );
};

export default Home;
