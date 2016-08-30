import { PropTypes } from 'react';

import gql from 'graphql-tag';
import { connect } from 'react-apollo';
import Day from '../../pres/Moisture/Day';

const DayContainer = connect({
  mapQueriesToProps({ ownProps, state }) { // eslint-disable-line no-unused-vars
    return {
      days: {
        query: gql`{
          day(hours: ${ownProps.hours}, clientId: "${ownProps.clientId}") {
            date, moisture
          }
        }`,
        variables: {},
        pollInterval: 1000 * 30, // 30 seconds
      },
    };
  },
})(Day);


DayContainer.propTypes = {
  hours: PropTypes.number.isRequired,
  clientId: PropTypes.string.isRequired,
};

export default DayContainer;
