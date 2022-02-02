import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navlinks from "../Navlinks";
import useStyles from "./styles";
import menuIcon from "../../../images/menuIcon.svg";

const Menu = ({ user }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Box className={classes.menuContainer}>
      <img
        onClick={handleToggle}
        className={classes.menuIcon}
        src={menuIcon}
        alt="menuIcon"
      />
      <Box className={classes.menu}>
        {isOpen && <Navlinks user={user} classes={classes} />}
      </Box>
    </Box>
  );
};

export default Menu;
