import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  createBtn: {
    "&:hover": {
      backgroundColor: "#1e88e5",
    },
    backgroundColor: "#0275d8",
    color: "#FFF",
  },
  dialogTitle: {
    "& .MuiTypography-root": {
      fontSize: 30,
      fontWeight: "bold",
      color: "#333",
    },
    textAlign: "center",
  },
});

export default useStyles;
