import React from 'react';
import './Country.css';

const Country = ({ name, population }) => {
  return (
    <div className="country">
      <h2>Name: {name}</h2>
      <h4>Population: {population}</h4>
    </div>
  );
};

export default Country;
