import React from 'react';

import { auth0Lock } from 'src/auth';

export default React.createClass({
  componentDidMount() {
    auth0Lock.show()
  },

  render: () => (
    <div>
      <div id="auth0-form"></div>
    </div>
  ),
});
