import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    minHeight: "calc(100vh - 70px)",
    display: "flex",
    alignItems: "center",
    width: "85vw",
  },
  header: {
    fontSize: 65,
    background: "-webkit-linear-gradient(#f44336, #111)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontFamily: "bebas neue, san serif",
    "@media (max-width: 1600px)": {
      fontSize: 50,
    },
    "@media (max-width: 1200px)": {
      fontSize: 40,
    },
    "@media (max-width: 450px)": {
      fontSize: 28,
    },
  },
  text: {
    fontFamily: "bebas neue, san serif",
    fontSize: 75,
    color: "red",
    "@media (max-width: 1600px)": {
      fontSize: 55,
    },
    "@media (max-width: 1200px)": {
      fontSize: 42,
    },
    "@media (max-width: 450px)": {
      fontSize: 30,
    },
  },
  paragraphContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "left",
    "@media (max-width: 960px)": {
      height: 350,
    },
  },
  description: {
    color: "#333",
    fontSize: 24,
    "@media (max-width: 1600px)": {
      fontSize: 18,
    },
    "@media (max-width: 1200px)": {
      fontSize: 15,
    },
  },
  button: {
    width: 200,
    height: 50,
    "@media (max-width: 1200px)": {
      width: 150,
      height: 38,
    },
  },
  tryBtn: {
    "&:hover": {
      backgroundColor: "#FFD7D7",
    },
    color: "red",
    border: "1px solid red",
  },
  loginBtn: {
    "&:hover": {
      backgroundColor: "#E44545",
    },
    backgroundColor: "red",
    border: "1px solid red",
    color: "white",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  colaCan: {
    width: "95%",
    "@media (max-width: 959px)": {
      width: "70%",
      marginTop: 20,
    },
  },
});

export default useStyles;
