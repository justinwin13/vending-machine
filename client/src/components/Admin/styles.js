import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
  },
  header: {
    textAlign: "center",
    margin: "20px 0",
    fontWeight: "bold",
    color: "#333",
  },
  table: {
    width: "80%",
  },
  tableContainer: {
    overflowY: "scroll",
    height: "80vh",
  },
  headerCell: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default useStyles;
