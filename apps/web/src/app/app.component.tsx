import React, {
  useEffect, useState
} from 'react';
import {
  Card, CardContent
} from '@material-ui/core';
import { LatLngExpression } from 'leaflet';
import { WebComponentsHeader } from '@corona-tracker/web/components/header';
import {
  ISelectButtonCountry, ICountry, sortCountries, HistoricalDataTypesEnum, prettyPrintStat
} from '@corona-tracker/shared/types';
import { WebComponentsInfoBox } from '@corona-tracker/web/components/info-box';
import { WebComponentsMap } from '@corona-tracker/web/components/map';
import { WebComponentsTable } from '@corona-tracker/web/components/table';
import { WebComponentsLineGraph } from '@corona-tracker/web/components/line-graph';

import 'leaflet/dist/leaflet.css';
import './app.component.scss';


export const App = () => {
  const [
    selectButtonCountries,
    setSelectButtonCountries
  ] = useState<ISelectButtonCountry[]>([]);
  const [
    selectButtonSelectedCountry,
    setSelectButtonSelectedCountry
  ] = useState('worldwide');
  const [
    selectedCountry,
    setSelectedCountry
  ] = useState<ICountry | undefined>();
  const [
    tableData,
    setTableData
  ] = useState<ICountry[]>([]);
  const [
    mapCenter,
    setMapCenter
  ] = useState<LatLngExpression>({
    lat: 20.5937,
    lng: 78.9629
  });
  const [
    mapZoom,
    setMapZoom
  ] = useState(3);
  const [
    countries,
    setCountries
  ] = useState<ICountry[]>([]);
  const [
    casesType,
    setCasesType
  ] = useState<HistoricalDataTypesEnum>(HistoricalDataTypesEnum.CASES);

  const handleSelectedCountry = (event_: React.ChangeEvent<{
    name?: string;
    value: unknown;
  }>) => {
    const countryCode = event_.target.value as string;
    const url = `https://disease.sh/v3/covid-19/${(countryCode === 'worldwide') ? 'all' : `countries/${countryCode}`}`;

    fetch(url)
      .then(response => response.json())
      .then((data: ICountry) => {
        setSelectButtonSelectedCountry(countryCode);
        setSelectedCountry(data);

        setMapCenter([
          data.countryInfo.lat,
          data.countryInfo.long
        ]);
        setMapZoom(4);
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

        setSelectButtonCountries(countryList);
        setTableData(sortCountries(data));
        setCountries(data);
      });

    fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then((data: ICountry) => {
        setSelectedCountry(data);
      });
  }, []);

  return (
    <div className="app">
      <div className="app__left">
        <WebComponentsHeader
          countriesList={selectButtonCountries}
          selectedCountry={selectButtonSelectedCountry}
          handleSelectedCountry={handleSelectedCountry}
        />
        <div className="app__stats">
          <WebComponentsInfoBox
            title="Cases"
            isRed
            isActive={casesType === HistoricalDataTypesEnum.CASES}
            cases={prettyPrintStat(selectedCountry?.todayCases)}
            total={prettyPrintStat(selectedCountry?.cases)}
            setCasesType={(event_: React.MouseEvent<HTMLDivElement, MouseEvent>) => setCasesType(HistoricalDataTypesEnum.CASES)}
          />

          <WebComponentsInfoBox
            title="Recovered"
            isActive={casesType === HistoricalDataTypesEnum.RECOVERED}
            cases={prettyPrintStat(selectedCountry?.todayRecovered)}
            total={prettyPrintStat(selectedCountry?.recovered)}
            setCasesType={(event_: React.MouseEvent<HTMLDivElement, MouseEvent>) => setCasesType(HistoricalDataTypesEnum.RECOVERED)}
          />

          <WebComponentsInfoBox
            title="Deaths"
            isRed
            isActive={casesType === HistoricalDataTypesEnum.DEATHS}
            cases={prettyPrintStat(selectedCountry?.todayDeaths)}
            total={prettyPrintStat(selectedCountry?.deaths)}
            setCasesType={(event_: React.MouseEvent<HTMLDivElement, MouseEvent>) => setCasesType(HistoricalDataTypesEnum.DEATHS)}
          />
        </div>

        <WebComponentsMap
          center={mapCenter}
          zoom={mapZoom}
          countries={countries}
          casesType={casesType}
        />
      </div>

      <Card className="app__right">
        <CardContent>
          <div className="app__information">
            <h3>Live Cases by Country</h3>
            <WebComponentsTable
              countries={tableData}
            />

            <h3>Worldwide New {casesType.toUpperCase()}</h3>
            <WebComponentsLineGraph
              casesType={casesType}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
