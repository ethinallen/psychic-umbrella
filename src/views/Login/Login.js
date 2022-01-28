import React, { Component } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';



const Login = () => (
  <div>testing testing</div>
);

export default withAuthenticationRequired(Login);
