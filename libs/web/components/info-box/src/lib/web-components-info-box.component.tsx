import React from 'react';

import './web-components-info-box.component.scss';

export interface IWebComponentsInfoBoxProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const WebComponentsInfoBox: React.FC = (properties: IWebComponentsInfoBoxProps) => {
  return (
    <div>
      <h1>Welcome to web-components-info-box!</h1>
    </div>
  );
};

export default WebComponentsInfoBox;
