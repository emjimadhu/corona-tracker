import React from 'react';
import numeral from 'numeral';
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
                  <strong>{numeral(country.cases).format('0,0')}</strong>
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
