import React from 'react';

import './web-components-table.component.scss';

export interface IWebComponentsTableProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const WebComponentsTable: React.FC = (properties: IWebComponentsTableProps) => {
  return (
    <div>
      <h1>Welcome to web-components-table!</h1>
    </div>
  );
};

export default WebComponentsTable;
