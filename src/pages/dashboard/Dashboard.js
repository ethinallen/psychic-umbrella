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
      <PageTitle/>
        <Grid container spacing={6}>
            <Window windowData={{
              "size"    : 12,
              "header"  : "hello! my name is drew",
              "body" : [
                      "i love meeting people, especially you!",
                      "to be honest, i have no idea why you are here.. but i would appreciate getting to know what brought you here.",
                      "for work i am a solutions engineer @Auth0 (now @Okta)",
                      "if you feel so inclined, please reach out to me at: drew@emery.guru",
                      ]
            }} >
          </Window>
          <Window windowData={{
            "size"    : 8,
            "header"  : "i stand on the shoulders of giants.",
            "body" : [
                    "i could never make an explicit list of people to thank for helping me get to where i am today. it's taken a lot of support, love, and encouragement from a lot of people to get me here and i am confident it will take even more to get me where i want to go.",
                    "at present i am furthering my knowledge of web technologies. ultimately, i want to make a difference in my community through technology.",
                    ]
          }} >
        </Window>
        <Window windowData={{
          "size"    : 4,
          "header"  : "you can expect photos, videos, and code snippets to be found here.",
          "body" : [
                  "all opinions here are mine. content, code, designs are posted here as is, with no warranties of any kind.",
                  ""
                  ]
        }} >
      </Window>
        </Grid>
    </>
  );
}
