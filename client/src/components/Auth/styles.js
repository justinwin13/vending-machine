import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
    padding: 0,
    marginTop: 80,
    "@media (max-width: 960px)": {
      marginTop: 0,
    },
  },
  container: {
    margin: "auto",
  },
  imageContainer: {
    height: "80%",
    backgroundColor: "red",
    borderRadius: "4px 0 0 4px",
  },
  header: {
    fontSize: 64,
    fontFamily: "Helvetica, san serif",
    fontWeight: "bold"
  },
  bgImage: {
    margin: "0",
    width: "100%",
    height: "100%",
    borderRadius: "4px 0 0 4px",
    "@media (max-width: 959px)": {
      display: "none",
    },
  },
  formContainer: {
    "@media (max-width: 959px)": {
      minHeight: "calc(100vh - 70px)",
    },
  },
  inputContainer: {
    width: "100%",
    height: "80%",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  gridContainer: {
    textAlign: "center"
  },
  submitBtn: {
    "&:hover": {
      backgroundColor: "#E44545",
    },
    margin: "0 auto",
    backgroundColor: "red",
    border: "1px solid red",
    color: "white",
    width: 200,
    height: 50,
  },
  toggleSignInText: {
      cursor: "pointer",
      color: "#555"
  }
});

export default useStyles;
