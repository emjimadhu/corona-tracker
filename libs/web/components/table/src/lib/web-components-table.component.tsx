import React from 'react';
import { ICountry } from '@corona-tracker/shared/types';

import './web-components-table.component.scss';

export interface IWebComponentsTableProps {
  countries: ICountry[];
}

export const WebComponentsTable: React.FC<IWebComponentsTableProps> = ({
  countries
}) => {
  return (
    <div className="table">
      {
        countries.map(({
          country, cases
        }: ICountry) => (
          <tr>
            <td>{country}</td>
            <td>{cases}</td>
          </tr>
        ))
      }
    </div>
  );
};

export default WebComponentsTable;
