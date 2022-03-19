import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

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
      {countries.map(({ name, latlng, population, region, area }) => (
        <Country
          key={latlng}
          name={name.common}
          population={population}
          region={region}
          area={area}
        ></Country>
      ))}
    </div>
  );
};

export default LoadCountries;
