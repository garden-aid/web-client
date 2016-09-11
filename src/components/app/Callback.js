import React, { PropTypes } from 'react';

import { Spinner } from 'react-mdl';

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
    return (<Spinner />)
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
