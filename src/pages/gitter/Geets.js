import React from 'react'
import {
  Card,
  CardContent,
  Grid,
  CardMedia,
  Typography,
  Avatar,
  CardHeader
} from '@material-ui/core';

import useStyles from "./styles";


function Geets({ geets }) {
  var classes = useStyles();

  return (
    <Grid direction="column" spacing={10}>
    {geets.map((geet) => (
      <div className={classes.cardContainer}>
        <Card>
          <CardHeader
          avatar={
            <Avatar src={geet.avatarurl} />
                }
          title={geet.username}
          subheader={geet.date}
        />
         <CardContent>
           <Typography variant="body2" color="text.secondary" component="div">{geet.message}</Typography>
         </CardContent>
       </Card>
       </div>
    ))}

     </Grid>
  )
};

export default Geets;
