interface IHistorialRecord {
  [key: string]: number;
}

export interface IHistoricalData {
  cases: IHistorialRecord;
  deaths: IHistorialRecord;
  recovered: IHistorialRecord;
}
