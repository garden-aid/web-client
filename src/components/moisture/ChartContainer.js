import { PropTypes } from 'react';

import gql from 'graphql-tag';
import { connect } from 'react-apollo';
import MoistureChart from './Chart';

const MoistureChartContainer = connect({
  mapQueriesToProps({ ownProps, state }) { // eslint-disable-line no-unused-vars
    return {
      moisture: {
        query: gql`{
          moisture(hours: ${ownProps.hours}, clientId: "${ownProps.clientId}") {
            date, moisture
          }
        }`,
        variables: {},
        pollInterval: 1000 * 30, // 30 seconds
      },
    };
  },
})(MoistureChart);


MoistureChartContainer.propTypes = {
  hours: PropTypes.number.isRequired,
  clientId: PropTypes.string.isRequired,
};

export default MoistureChartContainer;
