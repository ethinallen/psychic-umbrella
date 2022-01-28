import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Bin = () => (
  <div>testing testing</div>
);

export default withAuthenticationRequired(Bin, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
