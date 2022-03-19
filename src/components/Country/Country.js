import React from 'react';
import './Country.css';

const Country = ({ name, population, region, area }) => {
  return (
    <div className="country">
      <h2>Name: {name}</h2>
      <h4>Population: {population}</h4>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>
        <small>Area: {area}</small>
      </p>
    </div>
  );
};

export default Country;
