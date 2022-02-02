import React from "react";
import { AppBar, Box, Toolbar } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navlinks from "./Navlinks";
import Menu from "./Menu/Menu";
import colaCoRed from "../../images/cola-co-red.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/auth");
  };

  return (
    <Box className={classes.navbarContainer}>
      <AppBar className={classes.navbar} position="static">
        <Box component={Link} to="/home">
          <img className={classes.logo} src={colaCoRed} alt="ColaCo" />
        </Box>
        <Menu user={user} handleLogout={handleLogout} />
        <Toolbar className={classes.toolbar}>
          <Navlinks user={user} handleLogout={handleLogout} classes={classes} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
