import React from "react";

// styles
import useStyles from "./styles";

export default function Maps() {
  var classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <iframe title="let diddle" src="https://www.google.com/maps/d/u/0/embed?mid=1-RfKDlXoUl1vUwOuPE8nTLPsKyYfOAST&ehbc=2E312F" width="100%" height="100%"></iframe>
    </div>
  );
}
