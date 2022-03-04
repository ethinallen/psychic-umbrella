import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  mapContainer: {
    height: "85%",
    margin: -theme.spacing(1) * 3,
  },
  window: {
    height: "95%",
    maxWidth: "95%",
    objectFit: "contain",
  }
}));
