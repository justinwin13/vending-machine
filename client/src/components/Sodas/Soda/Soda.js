import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { updateUserBalance } from "../../../actions/users";
import { updateSodaQuantity } from "../../../actions/sodas";
import { UPDATE_GUEST_BALANCE } from "../../../constants/actionTypes";
import * as api from "../../../api";

import useStyles from "./styles";
import sodaBtn from "../../../images/soda-button.png";

const Soda = ({ soda }) => {
  const { productName, description, cost, quantity, image, _id } = soda;
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.authData);
  const guest = useSelector((state) => state.guest);

  const handlePurchase = async () => {
    let buyer;
    const amount = -1;

    if (user) buyer = user;
    else buyer = guest;

    const {
      data: { quantity },
    } = await api.fetchSoda(_id);

    if (buyer.balance >= cost && quantity > 0) {
      api.downloadSoda(_id, productName);
      dispatch(updateSodaQuantity(_id, amount));
      buyer._id
        ? dispatch(updateUserBalance(user._id, -cost))
        : dispatch({ type: UPDATE_GUEST_BALANCE, payload: -cost });
    } else {
      quantity
        ? setErrorMessage("Insufficient funds")
        : setErrorMessage("Out of stock");
      setIsAlertOpen(true);
    }
  };

  return (
    <Grid item className={classes.root}>
      <Dialog
        open={isDescriptionOpen}
        onClose={() => setIsDescriptionOpen((prev) => !prev)}
      >
        <DialogTitle className={classes.title}>{productName}</DialogTitle>
        <DialogContent>
          <Typography className={classes.dialogContent}>
            {description}
          </Typography>
          <Typography className={classes.dialogContent}>
            ${cost.toFixed(2)}
          </Typography>
          <Typography className={classes.dialogContent}>
            Left in stock: {quantity}
          </Typography>
        </DialogContent>
      </Dialog>
      <Paper
        onClick={() => setIsDescriptionOpen((prev) => !prev)}
        square={true}
        className={classes.paper}
      >
        <Typography variant="h4" align="center" className={classes.cost}>
          ${cost.toFixed(2)}
        </Typography>
        <img className={classes.sodaImage} src={image} alt="sodaImage" />
      </Paper>
      <Button onClick={handlePurchase} className={classes.button}>
        <img className={classes.sodaBtn} src={sodaBtn} alt="button" />
      </Button>
      <Snackbar
        className={classes.alert}
        autoHideDuration={4000}
        open={isAlertOpen}
        message={errorMessage}
        onClose={() => setIsAlertOpen(false)}
      />
    </Grid>
  );
};
export default Soda;
