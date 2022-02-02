import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";

import useStyles from "./styles";
import Soda from "./Soda/Soda";

const Sodas = () => {
  const classes = useStyles();
  const sodas = useSelector((state) => state.sodas);

  return (
    <Container className={classes.root} maxWidth={false}>
      <Grid container justifyContent="center">
        {sodas.map((soda) => {
          return <Soda key={soda._id} soda={soda} />;
        })}
      </Grid>
    </Container>
  );
};

export default Sodas;
