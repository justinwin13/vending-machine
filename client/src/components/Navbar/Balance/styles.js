import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  dialogTitle: {
    "& .MuiTypography-root": {
      fontWeight: "bold",
      fontSize: 40,
    },
    color: "#FFF",
    backgroundImage: "linear-gradient(to right, #F81C1C , #FF7373)",
  },
  contentContainer: {
    minHeight: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  depositText: {
    margin: 0,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  depositBtn: {
    backgroundColor: "#FFF",
    border: "1px solid red",
    color: "red",
    "&:hover": {
      backgroundColor: "#FFD7D7",
    },
  },
  balanceContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    margin: 0,
    padding: 20,
  },
  balanceBtn: {
    "&:hover": {
      backgroundColor: "#FFD7D7",
    },
    padding: "9px 20px",
    color: "red",
    backgroundColor: "#FFF",
    border: "1px solid red",
    marginRight: 10,
    "@media (max-width:850px)": {
      margin: "10px 0",
    },
  },
  balance: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default useStyles;
