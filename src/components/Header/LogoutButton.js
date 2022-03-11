// src/components/logout-button.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from "../Wrappers";

import useStyles from "./styles";

const LogoutButton = () => {
  const { logout } = useAuth0();
  var classes = useStyles();
  return (
    <Typography
      className={classes.profileMenuLink}
      color="primary"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })}
    >
      Sign Out
    </Typography>
  );
};

export default LogoutButton;
