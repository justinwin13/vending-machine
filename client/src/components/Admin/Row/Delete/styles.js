import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sodaCell: {
    textOverflow: "ellipsis",
    color: "#333",
  },
  trashIcon: {
    "&:hover": {
      opacity: 0.3,
    },
    opacity: 0.2,
    width: "1rem",
  },
});

export default useStyles;
