import React from 'react';
import './Country.css';

const Country = (props) => {
  const { name, population, region, area, flags } = props.country;
  console.log(props.country);
  return (
    <div className="country">
      <h2>Name: {name.common}</h2>
      <h4>Population: {population}</h4>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>
        <small>Area: {area}</small>
      </p>
      <img src={flags.svg} alt="" />
    </div>
  );
};

export default Country;
