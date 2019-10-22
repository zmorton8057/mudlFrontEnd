import React from 'react';
import { Chart } from '@bit/primefaces.primereact.chart';

const data = {
  labels: ['A', 'B', 'C'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};
 
export default (
  <div style={{ width: 400 }}>
    <Chart type='doughnut' data={data} />
  </div>
);