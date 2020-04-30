import React from 'react';
import { compose } from 'recompose';

import { withAuthentication, withEmailVerification } from './session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthentication(condition),
)(HomePage);
