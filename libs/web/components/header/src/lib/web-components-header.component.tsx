import React, { useState } from 'react';
import {
  FormControl, Select, MenuItem
} from '@material-ui/core';
import { ISelectButtonCountry } from '@corona-tracker/shared/types';

import './web-components-header.component.scss';

export interface IWebComponentsHeaderProps {
  countriesList: ISelectButtonCountry[];
}

export const WebComponentsHeader: React.FC<IWebComponentsHeaderProps> = ({
  countriesList
}) => {
  return (
    <div className="header">
      <h1>CORONA TRACKER</h1>
      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value=""
        >
          {
            countriesList.map((country: ISelectButtonCountry, index: number) => (
              <MenuItem value={country.value} key={index}>{country.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
};

export default WebComponentsHeader;
