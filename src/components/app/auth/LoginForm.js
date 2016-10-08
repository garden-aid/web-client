import React, { Component } from 'react';

import { auth0Lock } from 'src/auth';

export default class Login extends Component {
  componentDidMount() {
    auth0Lock.show();
  }

  render() {
    return (
      <div>
        <div id="auth0-form" />
      </div>
    );
  }
}
