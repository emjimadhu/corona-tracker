import React from 'react';
import {
  Map, TileLayer, Circle, Popup
} from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import numeral from 'numeral';
import {
  ICountry, HistoricalDataTypesEnum, casesTypeColors
} from '@corona-tracker/shared/types';

import './web-components-map.component.scss';

export interface IWebComponentsMapProps {
  center: LatLngExpression;
  zoom: number;
  countries: ICountry[];
  casesType: HistoricalDataTypesEnum;
}

export const WebComponentsMap: React.FC<IWebComponentsMapProps> = ({
  center, zoom, countries, casesType
}) => {
  const showMapData = (data: ICountry[], casesType: HistoricalDataTypesEnum = HistoricalDataTypesEnum.CASES) => {
    return data.map((country: ICountry, index: number) => (
      <Circle
        key={index}
        center={[
          country.countryInfo.lat,
          country.countryInfo.long
        ]}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        fillOpacity={0.4}
        radius={
          Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }
      >
        <Popup>
          <div className="info-container">
            <div
              className="info-flag"
              style={{
                backgroundImage: `url(${country.countryInfo.flag})`
              }}
            ></div>
            <div className="info-name">{country.country}</div>
            <div className="info-confirmed">
            Cases: {numeral(country.cases).format('0,0')}
            </div>
            <div className="info-recovered">
            Recovered: {numeral(country.recovered).format('0,0')}
            </div>
            <div className="info-deaths">
            Deaths: {numeral(country.deaths).format('0,0')}
            </div>
          </div>
        </Popup>
      </Circle>
    ));
  };

  return (
    <div>
      <div className="map">
        <Map
          center={center}
          zoom={zoom}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {
            showMapData(countries, casesType)
          }
        </Map>
      </div>
    </div>
  );
};

export default WebComponentsMap;
