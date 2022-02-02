import { makeStyles } from "@material-ui/core";
import colaBg from "../../images/cola-co-bg.png";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${colaBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "repeat-y",
    backgroundSize: "100% auto",
    minHeight: "calc(100vh - 70px)",
  },
});

export default useStyles;
