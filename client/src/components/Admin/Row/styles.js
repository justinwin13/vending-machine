import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sodaRow: {
    "& :hover": {
      cursor: "pointer",
    },
    padding: 50,
    width: "100vw",
  },
  sodaCell: {
    textOverflow: "ellipsis",
    color: "#333",
  },
});

export default useStyles;
