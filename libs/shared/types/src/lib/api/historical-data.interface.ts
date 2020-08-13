interface IHistorialRecord {
  [key: string]: number;
}

export interface IHistoricalData {
  cases: IHistorialRecord;
  deaths: IHistorialRecord;
  recovered: IHistorialRecord;
}

export enum HistoricalDataTypesEnum {
  CASES = 'cases',
  DEATHS = 'deaths',
  RECOVERED = 'recovered'
}
