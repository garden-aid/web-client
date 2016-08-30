import React, { PropTypes } from 'react';
import { Line } from 'react-chartjs-2';

const Day = ({ days }) => {
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
};

Day.propTypes = {
  days: PropTypes.shape({
    loading: PropTypes.bool,
    day: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      moisture: PropTypes.number.isRequired,
    })),
  }).isRequired,
};

export default Day;
