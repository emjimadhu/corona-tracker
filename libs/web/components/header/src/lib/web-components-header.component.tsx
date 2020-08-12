import React, { useState } from 'react';
import {
  FormControl, Select, MenuItem
} from '@material-ui/core';
import { ISelectButtonCountry } from '@corona-tracker/shared/types';

import './web-components-header.component.scss';

export interface IWebComponentsHeaderProps {
  countriesList: ISelectButtonCountry[];
  selectedCountry: string;
  handleSelectedCountry: (event_: React.ChangeEvent<{
    name?: string;
    value: unknown;
  }>) => void;
}

export const WebComponentsHeader: React.FC<IWebComponentsHeaderProps> = ({
  countriesList,
  selectedCountry,
  handleSelectedCountry
}) => {
  return (
    <div className="header">
      <h1>CORONA TRACKER</h1>
      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value={selectedCountry}
          onChange={event_ => handleSelectedCountry(event_)}
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
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
