import React from 'react';
import {
  Map, TileLayer
} from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

import './web-components-map.component.scss';

export interface IWebComponentsMapProps {
  center: LatLngExpression;
  zoom: number;
}

export const WebComponentsMap: React.FC<IWebComponentsMapProps> = ({
  center, zoom
}) => {
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
        </Map>
      </div>
    </div>
  );
};

export default WebComponentsMap;
