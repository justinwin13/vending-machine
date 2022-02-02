import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import Balance from "./Balance/Balance";

const Navlinks = ({ user, handleLogout, classes }) => {
  return (
    <>
      <Typography component={Link} className={classes.navLink} to="/home">
        Home
      </Typography>
      <Typography
        component={Link}
        className={classes.navLink}
        to="/vending-machine"
      >
        Vending Machine
      </Typography>
      {user?.authData?.isAdmin && (
        <Typography
          component={Link}
          className={classes.navLink}
          to="/admin-panel"
        >
          Admin Panel
        </Typography>
      )}
      <Balance />
      {user?.authData ? (
        <Button
          variant="contained"
          className={classes.navButton}
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="contained"
          className={classes.navButton}
          component={Link}
          to="/auth"
        >
          Sign in
        </Button>
      )}
    </>
  );
};

export default Navlinks;
