import React from "react";
import { Grid, TextField } from "@material-ui/core";

const Input = ({ name, label, type, classes, handleChange }) => {
  return (
    <Grid item xs={11}>
      <TextField
        className={classes}
        variant="outlined"
        name={name}
        label={label}
        type={type}
        onChange={handleChange}
        color="secondary"
        required
        fullWidth
      />
    </Grid>
  );
};

export default Input;
