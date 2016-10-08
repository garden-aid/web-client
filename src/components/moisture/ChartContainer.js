import { PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import gql from 'graphql-tag';
import { connect } from 'react-apollo';

import { updateHours } from 'src/actions';

import MoistureChart from './Chart';

const MoistureChartContainer = connect({
  mapQueriesToProps({ ownProps, state }) { // eslint-disable-line no-unused-vars
    return {
      moisture: {
        query: gql`{
          moisture(hours: ${state.dashboard.hours}, clientId: "${ownProps.clientId}") {
            date, moisture
          }
        }`,
        variables: {},
        pollInterval: 1000 * 30, // 30 seconds
      },
    };
  },
  mapStateToProps({ state }) {
    if (!state) {
      return { hours: 1 };
    }
    console.log('state', state);
    return { hours: state.dashboard.hours };
  },
  mapDispatchToProps: dispatch => ({
    onHoursChange: bindActionCreators(updateHours, dispatch),
  }),
})(MoistureChart);


MoistureChartContainer.propTypes = {
  clientId: PropTypes.string.isRequired,
};

export default MoistureChartContainer;
