import React from "react";
import { Typography, Container } from "@material-ui/core";
import useStyles from "./styles";

const Error = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.errorHeader} variant="h2">
        Page not found.
      </Typography>
    </Container>
  );
};

export default Error;
