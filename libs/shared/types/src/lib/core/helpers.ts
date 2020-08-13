/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/camelcase */
import numeral from 'numeral';

import { ICountry } from '../api';

export const sortCountries = (countries: ICountry[]): ICountry[] => countries.sort((a: ICountry, b: ICountry) => (a.cases > b.cases) ? -1 : 1);

export const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    rgb: 'rgb(204, 16, 52)',
    half_op: 'rgba(204, 16, 52, 0.5)',
    multiplier: 800
  },
  recovered: {
    hex: '#4caf50',
    rgb: 'rgb(76, 175, 80)',
    half_op: 'rgba(125, 215, 29, 0.5)',
    multiplier: 1200
  },
  deaths: {
    hex: '#fb4443',
    rgb: 'rgb(251, 68, 67)',
    half_op: 'rgba(251, 68, 67, 0.5)',
    multiplier: 2000
  }
};

export const prettyPrintStat = (stat: string | number) =>
  stat ? `+${numeral(stat).format('0.0a')}` : '+0';
