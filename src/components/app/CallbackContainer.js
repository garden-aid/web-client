import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { redirectToHome } from 'src/actions';

import Callback from './Callback';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  redirectToHome: bindActionCreators(redirectToHome, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
