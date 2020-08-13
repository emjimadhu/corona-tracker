import React, {
  useEffect, useState
} from 'react';
import {
  Card, CardContent
} from '@material-ui/core';
import { WebComponentsHeader } from '@corona-tracker/web/components/header';
import {
  ISelectButtonCountry, ICountry, sortCountries
} from '@corona-tracker/shared/types';
import { WebComponentsInfoBox } from '@corona-tracker/web/components/info-box';
import { WebComponentsMap } from '@corona-tracker/web/components/map';
import { WebComponentsTable } from '@corona-tracker/web/components/table';
import { WebComponentsLineGraph } from '@corona-tracker/web/components/line-graph';

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
  const [
    selectedCountryData,
    setSelectedCountryData
  ] = useState<ICountry | undefined>();
  const [
    tableData,
    setTableData
  ] = useState<ICountry[]>([]);

  const handleSelectedCountry = (event_: React.ChangeEvent<{
    name?: string;
    value: unknown;
  }>) => {
    const countryCode = event_.target.value as string;
    const url = `https://disease.sh/v3/covid-19/${(countryCode === 'worldwide') ? 'all' : `countries/${countryCode}`}`;

    fetch(url)
      .then(response => response.json())
      .then((data: ICountry) => {
        setSelectedCountry(countryCode);
        setSelectedCountryData(data);
      });
  };

  useEffect(() => {
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
        setTableData(sortCountries(data));
      });

    fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then((data: ICountry) => {
        setSelectedCountryData(data);
      });
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
            cases={selectedCountryData?.todayCases}
            total={selectedCountryData?.cases}
          />

          <WebComponentsInfoBox
            title="Recovered"
            cases={selectedCountryData?.todayRecovered}
            total={selectedCountryData?.recovered}
          />

          <WebComponentsInfoBox
            title="Deaths"
            cases={selectedCountryData?.todayDeaths}
            total={selectedCountryData?.deaths}
          />
        </div>

        <WebComponentsMap />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <WebComponentsTable
            countries={tableData}
          />

          <h3>Worldwide New Cases</h3>
          <WebComponentsLineGraph />
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
