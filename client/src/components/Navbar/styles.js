import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbarContainer: {
    width: "100%",
    height: 70,
  },
  navbar: {
    position: "fixed",
    height: 70,
    backgroundColor: "white",
    padding: "10px 40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  logo: {
    width: 170,
  },
  toolbar: {
    "@media (max-width: 1000px)": {
      display: "none",
    },
  },
  navLink: {
    "&:hover": {
      color: "#777",
    },
    fontWeight: "bold",
    fontSize: 16,
    textDecoration: "none",
    color: "#444",
    marginRight: "50px",
    transition: ".2s ease",
  },
  navButton: {
    "&:hover": {
      backgroundColor: "#E44545",
    },
    fontWeight: "bold",
    backgroundColor: "red",
    border: "1px solid red",
    color: "white",
  },
});

export default useStyles;
