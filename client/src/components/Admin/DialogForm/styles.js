import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  dialogTitle: {
    "& .MuiTypography-root": {
      fontSize: 30,
      fontWeight: "bold",
      color: "#333",
    },
    textAlign: "center",
  },
  buttonGroup: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    padding: "10px 21%",
    margin: "20px 0",
    fontWeight: "bold",
    color: "#FFF",
  },
  btn: {
    "&:hover": {
      backgroundColor: "#1e88e5",
    },
    backgroundColor: "#0275d8",
    marginRight: 2,
    color: "#FFF",
  },
  cancelBtn: {
    "&:hover": {
      backgroundColor: "#aaa",
    },
    backgroundColor: "#bbb",
    marginLeft: 2,
  },
});

export default useStyles;
