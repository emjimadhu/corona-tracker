import React from 'react';
import {
  FormControl, Select, MenuItem
} from '@material-ui/core';

import './web-components-header.component.scss';

export interface IWebComponentsHeaderProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const WebComponentsHeader = (properties: IWebComponentsHeaderProps) => {
  return (
    <div className="header">
      <h1>CORONA TRACKER</h1>
      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="D">D</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default WebComponentsHeader;
