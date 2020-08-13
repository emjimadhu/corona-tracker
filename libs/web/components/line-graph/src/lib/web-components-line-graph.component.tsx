import React, {
  useState, useEffect
} from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import {
  IHistoricalData, HistoricalDataTypesEnum
} from '@corona-tracker/shared/types';

import './web-components-line-graph.component.scss';

const options = {
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    }
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function(tooltipItem, data) {
        return numeral(tooltipItem.value).format('+0,0');
      }
    }
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll'
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return numeral(value).format('0a');
          }
        }
      }
    ]
  }
};

const buildChartData = (data: IHistoricalData, casesType: HistoricalDataTypesEnum) => {
  const chartData = [];
  let lastDataPoint: number;

  for (const date in data.cases) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

export interface IWebComponentsLineGraphProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const WebComponentsLineGraph: React.FC = (properties: IWebComponentsLineGraphProps) => {
  const [
    lineData,
    setLineData
  ] = useState<{x: string; y: number}[]>([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
      .then(response => response.json())
      .then((data: IHistoricalData) => {
        setLineData(buildChartData(data, HistoricalDataTypesEnum.CASES));
      });
  }, []);

  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              backgroundColor: 'rgba(204, 16, 52, 0.5)',
              borderColor: '#CC1034',
              data: lineData
            }
          ]
        }}
        options={options}
      />
    </div>
  );
};

export default WebComponentsLineGraph;
