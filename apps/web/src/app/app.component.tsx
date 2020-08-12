import React, {
  useEffect, useState
} from 'react';
import { WebComponentsHeader } from '@corona-tracker/web/components/header';
import {
  ISelectButtonCountry, ICountry
} from '@corona-tracker/shared/types';

import './app.component.scss';


export const App = () => {
  const [
    countries,
    setCountries
  ] = useState<ISelectButtonCountry[]>([]);

  useEffect(() => {
    const getCountriesList = () => {
      fetch('https://disease.sh/v3/covid-19/countries')
        .then(response => response.json())
        .then((data: ICountry[]) => {
          const countryList = data.map((country: ICountry) => {
            return {
              name: country.country,
              value: country.countryInfo.iso2
            };
          });

          setCountries(countryList);
        });
    };

    getCountriesList();
  }, []);

  return (
    <div className="app">
      <WebComponentsHeader
        countriesList={countries}
      />
    </div>
  );
};

export default App;
