import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import colaCan from "../../images/cola-can-bg.png";

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer} maxWidth={false}>
      <Grid container>
        <Grid className={classes.paragraphContainer} item sm={12} md={6}>
          <Typography className={classes.header} variant="h1">
            Brand-new{" "}
            <Typography className={classes.text}>
              Virtual Vending Machine
            </Typography>{" "}
            out now!
          </Typography>
          <Typography className={classes.description} variant="h6">
            Try our new line of virtual sodas now with all-new flavors including
            Fizz, Pop, Cola, and Mega Pop!
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                className={`${classes.button} ${classes.tryBtn}`}
                variant="outlined"
                component={Link}
                to="/vending-machine"
              >
                Try Now!
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={`${classes.button} ${classes.loginBtn}`}
                variant="contained"
                component={Link}
                to="/auth"
              >
                Log in
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.imageContainer} item sm={12} md={6}>
          <img className={classes.colaCan} src={colaCan} alt="colaCan" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
