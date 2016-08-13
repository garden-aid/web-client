import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Day({ days }) {
  const items = days.day || [];

  if (days.loading) {
    return (
      <p>Loading...</p>
    );
  }

  const data = {
    labels: items.map((d) => d.date, []),
    datasets: [{
      label: 'Moisture',
      fill: true,
      data: items.map((d) => d.moisture, []),
    }],
  };

  const options = {
    scales: {
      xAxes: [{
        type: 'time',
      }],
    },
  };

  return (
    <div className="widget">
      <div className="widget-body">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
