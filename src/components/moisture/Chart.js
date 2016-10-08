import React, { PropTypes } from 'react';
import { Line } from 'react-chartjs-2';

const MoistureChart = ({ moisture }) => {
  if (!moisture) {
    return (
      <p>Error loading chart.</p>
    );
  }
  const items = moisture.moisture || [];

  if (moisture.loading) {
    return (
      <p>Loading...</p>
    );
  }

  const data = {
    labels: items.map(d => d.date, []),
    datasets: [{
      label: 'Moisture',
      fill: true,
      data: items.map(d => d.moisture, []),
    }],
  };

  const options = {
    scales: {
      xAxes: [{
        type: 'time',
      }],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  };

  return (
    <div className="widget">
      <div className="widget-body">
        <Line data={data} options={options} height={210} width={400} />
      </div>
    </div>
  );
};

MoistureChart.propTypes = {
  moisture: PropTypes.shape({
    loading: PropTypes.bool,
    moisture: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      moisture: PropTypes.number.isRequired,
    })),
  }).isRequired,
};

export default MoistureChart;
