import React, { PropTypes } from 'react';
import { Slider } from 'react-mdl';
import { Line } from 'react-chartjs-2';

const MoistureChart = ({ moisture, hours, onHoursChange }) => {
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
      <div className="widget-header">
        <div className="widget-controls">
          <Slider
            min={1}
            max={48}
            defaultValue={hours}
            onChange={evt => onHoursChange(evt.target.value)}
          />
        </div>
      </div>
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
  hours: PropTypes.number.isRequired,
  onHoursChange: PropTypes.func.isRequired,
};

export default MoistureChart;
