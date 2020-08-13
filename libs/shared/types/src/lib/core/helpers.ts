import { ICountry } from '../api';

export const sortCountries = (countries: ICountry[]): ICountry[] => countries.sort((a: ICountry, b: ICountry) => (a.cases > b.cases) ? -1 : 1);
