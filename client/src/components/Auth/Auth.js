import React, { useState } from "react";
import { Container, Grid, Typography, Button, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "./Input";
import { signIn, signUp } from "../../actions/auth";
import useStyles from "./styles";
import colaCoCap from "../../images/cola-co-cap.png";

const Auth = () => {
  const classes = useStyles();
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let message;
    if (isSignIn) {
      dispatch(signIn(formData, navigate));
    } else {
      dispatch(signUp(formData, navigate));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    setIsSignIn((prevState) => setIsSignIn(!prevState));
  };

  return (
    <Container className={classes.mainContainer} maxWidth="md">
      <Paper elevation={4}>
        <Grid className={classes.container} container>
          <Grid item className={classes.imageContainer} md={5}>
            <img
              className={classes.bgImage}
              src={colaCoCap}
              alt="backgroundImage"
            />
          </Grid>
          <Grid item className={classes.formContainer} xs={12} md={7}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid
                className={classes.inputContainer}
                item
                container
                alignItems="center"
                justifyContent="center"
              >
                {isSignIn ? (
                  <Typography className={classes.header} variant="h2">
                    Sign in
                  </Typography>
                ) : (
                  <Typography className={classes.header} variant="h2">
                    Sign up
                  </Typography>
                )}
                {!isSignIn && (
                  <>
                    <Input
                      name="firstName"
                      label="First Name"
                      type="text"
                      handleChange={handleChange}
                    />
                    <Input
                      name="lastName"
                      label="Last Name"
                      type="text"
                      handleChange={handleChange}
                    />
                  </>
                )}
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  handleChange={handleChange}
                />
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  handleChange={handleChange}
                />
                <Grid className={classes.gridContainer} item xs={12}>
                  <Button
                    className={classes.submitBtn}
                    variant="contained"
                    type="submit"
                  >
                    {isSignIn ? "Sign in" : "Sign up"}
                  </Button>
                </Grid>
                <Grid className={classes.gridContainer} item xs={12}>
                  <Typography
                    className={classes.toggleSignInText}
                    variant="subtitle2"
                    onClick={handleClick}
                  >
                    {isSignIn
                      ? "Don't have an account? Click here to create one!"
                      : "Already have an account? Click here to sign in!"}
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Auth;
