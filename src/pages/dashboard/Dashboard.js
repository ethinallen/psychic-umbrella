import React from "react";
import {
  Grid,
} from "@material-ui/core";

// components
import Window from "../../components/Window";
import PageTitle from "../../components/PageTitle";

export default function Dashboard(props) {

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
                      "",
                      ]
            }} >
          </Window>
        </Grid>
    </>
  );
}
