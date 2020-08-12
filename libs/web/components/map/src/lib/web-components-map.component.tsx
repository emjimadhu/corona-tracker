import React from 'react';

import './web-components-map.component.scss';

export interface IWebComponentsMapProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const WebComponentsMap: React.FC = (properties: IWebComponentsMapProps) => {
  return (
    <div>
      <h1>Welcome to web-components-map!</h1>
    </div>
  );
};

export default WebComponentsMap;
