import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Badge, Typography } from "../Wrappers";

import useStyles from "./styles";

const LoginButton = () => {
  var classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  return (
    <Typography
      className={classes.profileMenuLink}
      color="primary"
      onClick={() => loginWithRedirect()}
    >
    Sign In
    </Typography>
  );
};

export default LoginButton;
