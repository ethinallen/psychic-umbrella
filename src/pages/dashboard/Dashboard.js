import React, { useState } from "react";
import {
  Grid,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";

import { useTheme } from "@material-ui/styles";

// styles
import useStyles from "./styles";

// components
import data from "./data";
import Widget from "../../components/Widget";
import Window from "../../components/Window";
import PageTitle from "../../components/PageTitle";
import Dot from "../../components/Sidebar/components/Dot";
import BigStat from "./components/BigStat/BigStat";

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <>
      <PageTitle title="Home" />
        <Grid container spacing={6}>
            <Window windowData={{
              "size"    : 12,
              "header"  : "hello! my name is drew",
              "body" : [
                      "i love meeting people, especially you!",
                      "to be honest, i have no idea why you are here.. but i would appreciate getting to know what brought you here",
                      "for work i am a solutions engineer @Auth0 (now @Okta)",
                      "if you feel so inclined, please reach out to me at: drew@emery.guru",
                      ]
            }} >
          </Window>
          {data.windows.map((windowData, index) =>
            <Grid item xs={windowData.size}>
              <Window
              windowData={windowData}
              />
            </Grid>
          )}
          <iframe src="https://www.google.com/maps/d/u/1/embed?mid=17Va0dOQrBWkhHMgMRn_H6FPUzNkE2lBU&ehbc=2E312F" width="640" height="480"></iframe>
        </Grid>
    </>
  );
}
