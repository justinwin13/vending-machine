import { makeStyles } from "@material-ui/styles";
import iceCubes from "../../../images/ice-cubes.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    "& .MuiTypography-root": {
      fontWeight: "bold",
      fontSize: 40,
      textAlign: "center",
    },
  },
  dialogContent: {
    marginBottom: 10,
    fontSize: 20,
  },
  paper: {
    boxShadow: "8px 8px 4px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    width: 300,
    height: 500,
    borderRadius: 150,
    borderCollapse: "separate",
    backgroundImage: `url(${iceCubes})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 500,
    backgroundPositionY: "100%",
    padding: 40,
    border: "10px solid black",
    "@media (max-width: 380px)": {
      width: 230,
      height: 385,
      margin: 20,
    },
  },
  cost: {
    width: 60,
    fontSize: 18,
    backgroundImage: "linear-gradient(#FFE864, #F0B700)",
    fontWeight: "bold",
  },
  sodaImage: {
    width: 200,
    marginTop: 10,
    "@media (max-width: 380px)": {
      width: 150,
      marginTop: 5,
    },
  },
  button: {
    "& .MuiButton-root": {
      borderRadius: "50%",
    },
    "& .MuiButtonBase-root": {
      borderRadius: "50%",
    },
    "& span": {
      borderRadius: "50%",
    },
    width: 120,
    height: 120,
  },
  sodaBtn: {
    margin: "auto",
    width: 100,
    borderRadius: "50%",
  },
  alert: {
    "& .MuiPaper-root": {
      backgroundColor: "#FFC4C4",
      color: "red",
      fontSize: 20,
      textAlign: "center",
      margin: "auto",
    },
    textAlign: "center",
    position: "fixed",
    bottom: "5%",
    left: "50%",
    transform: "translate(-50%, 0)",
  },
});

export default useStyles;
