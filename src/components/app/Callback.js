import React, { PropTypes } from 'react';

import { CircularProgress } from 'material-ui';

export default React.createClass({
  propTypes: {
    redirectToHome: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      nextProps.redirectToHome();
    }
  },

  renderLoading() {
    return (<CircularProgress />)
  },

  renderError() {
    return (
      <p>{this.props.errorMessage}</p>
    );
  },
  render() {
    return (
      <div>
        {!this.props.errorMessage ?
          this.renderLoading() :
          this.renderError()
        }
      </div>
    );
  },
});
