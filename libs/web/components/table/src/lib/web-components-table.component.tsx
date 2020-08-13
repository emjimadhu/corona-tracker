import React from 'react';
import {} from '@material-ui/core';
import { ICountry } from '@corona-tracker/shared/types';

import './web-components-table.component.scss';

export interface IWebComponentsTableProps {
  countries: ICountry[];
}

export const WebComponentsTable: React.FC<IWebComponentsTableProps> = ({
  countries
}) => {
  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          {
            countries.map((country: ICountry, index: number) => (
              <tr key={index}>
                <td>{country.country}</td>
                <td>
                  <strong>{country.cases}</strong>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default WebComponentsTable;
