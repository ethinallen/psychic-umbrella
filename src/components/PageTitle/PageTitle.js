import React from "react";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer} style={{"align-items" : "left"}}>
      <Typography className={classes.typo} variant="h1" size="sm">
        {props.title}
      </Typography>
      <Typography className={classes.typo} variant="h2" size="sm">
        {props.desc}
      </Typography>
      {props.button && props.button}
    </div>
  );
}
