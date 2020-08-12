import React, {
  useEffect, useState
} from 'react';
import {
  Card, CardContent
} from '@material-ui/core';
import { WebComponentsHeader } from '@corona-tracker/web/components/header';
import {
  ISelectButtonCountry, ICountry
} from '@corona-tracker/shared/types';
import { WebComponentsInfoBox } from '@corona-tracker/web/components/info-box';
import { WebComponentsMap } from '@corona-tracker/web/components/map';

import './app.component.scss';


export const App = () => {
  const [
    countries,
    setCountries
  ] = useState<ISelectButtonCountry[]>([]);
  const [
    selectedCountry,
    setSelectedCountry
  ] = useState('worldwide');

  const handleSelectedCountry = (event_: React.ChangeEvent<{
    name?: string;
    value: unknown;
  }>) => {
    setSelectedCountry(event_.target.value as string);
  };

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
      <div className="app__left">
        <WebComponentsHeader
          countriesList={countries}
          selectedCountry={selectedCountry}
          handleSelectedCountry={handleSelectedCountry}
        />
        <div className="app__stats">
          <WebComponentsInfoBox
            title="Cases"
            cases={100}
            total={500000}
          />

          <WebComponentsInfoBox
            title="Recovered"
            cases={100}
            total={500000}
          />

          <WebComponentsInfoBox
            title="Deaths"
            cases={100}
            total={500000}
          />
        </div>

        <WebComponentsMap />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>

          <h3>Worldwide New Cases</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
