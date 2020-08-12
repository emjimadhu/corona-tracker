import React from 'react';

import './web-components-header.component.scss';

export interface IWebComponentsHeaderProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const WebComponentsHeader = (properties: IWebComponentsHeaderProps) => {
  return (
    <div>
      <h1>Welcome to web-components-header!</h1>
    </div>
  );
};

export default WebComponentsHeader;
