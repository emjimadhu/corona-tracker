import React from 'react';
import {
  Card, CardContent, Typography
} from '@material-ui/core';

import './web-components-info-box.component.scss';

export interface IWebComponentsInfoBoxProps {
  isActive: boolean;
  isRed?: boolean;
  title: string;
  cases: string;
  total: string;
  setCasesType: (event_: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const WebComponentsInfoBox: React.FC<IWebComponentsInfoBoxProps> = ({
  isActive, isRed, title, cases, total, setCasesType
}) => {
  return (
    <Card
      className={`infoBox ${isActive && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}
      onClick={(event_: React.MouseEvent<HTMLDivElement, MouseEvent>) => setCasesType(event_)}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WebComponentsInfoBox;
