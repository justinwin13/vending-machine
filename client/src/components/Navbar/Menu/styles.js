import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  menuContainer: {
    display: "none",
    "@media (max-width:1000px)": {
      display: "block",
    },
  },
  menuIcon: {
    width: 35,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "fixed",
    top: 70,
    left: 0,
    color: "black",
  },
  navLink: {
    "&:hover": {
      color: "#777",
    },
    margin: "10px 0",
    fontWeight: "bold",
    fontSize: 16,
    textDecoration: "none",
    color: "#EEE",
    transition: ".2s ease",
  },
  navButton: {
    "&:hover": {
      backgroundColor: "#E44545",
    },
    margin: "10px 0",
    fontWeight: "bold",
    backgroundColor: "red",
    border: "1px solid red",
    color: "white",
  },
});

export default useStyles;
