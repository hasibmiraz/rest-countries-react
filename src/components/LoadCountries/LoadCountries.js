import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './LoadCountries.css';

const LoadCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Visiting every country</h1>
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.latlng} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default LoadCountries;
