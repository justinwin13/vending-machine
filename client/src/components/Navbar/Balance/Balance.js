import React, { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Grid,
  Box,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { updateUserBalance } from "../../../actions/users";
import { UPDATE_GUEST_BALANCE } from "../../../constants/actionTypes";

import useStyles from "./styles";

const Balance = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const guest = useSelector((state) => state.guest);
  const dispatch = useDispatch();
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);

  const handleBalance = () => {
    setIsBalanceOpen((prevIsBalanceOpen) => !prevIsBalanceOpen);
  };

  const handleDepositMoney = (amount) => {
    if (user?.authData) {
      dispatch(updateUserBalance(user?.authData?._id, amount));
    } else {
      dispatch({ type: UPDATE_GUEST_BALANCE, payload: amount });
    }
    handleBalance();
  };

  return (
    <Box>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={isBalanceOpen}
        onClose={handleBalance}
      >
        <DialogTitle className={classes.dialogTitle}>
          Balance $
          {user?.authData?.balance?.toFixed(2) || guest.balance.toFixed(2)}
        </DialogTitle>
        <DialogContent className={classes.contentContainer}>
          <Grid
            container
            justifyContent="center"
            spacing={4}
            alignItems="center"
          >
            <Grid item>
              <DialogContentText className={classes.depositText}>
                Deposit
              </DialogContentText>
            </Grid>
            <Grid item>
              <Button
                onClick={() => handleDepositMoney(1)}
                className={classes.depositBtn}
                variant="contained"
              >
                $1.00
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => handleDepositMoney(2)}
                className={classes.depositBtn}
                variant="contained"
              >
                $2.00
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => handleDepositMoney(5)}
                className={classes.depositBtn}
                variant="contained"
              >
                $5.00
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => handleDepositMoney(10)}
                className={classes.depositBtn}
                variant="contained"
              >
                $10.00
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Button
        onClick={handleBalance}
        variant="contained"
        className={classes.balanceBtn}
      >
        <Typography className={classes.balance} variant="h5">
          Balance: $
          {user?.authData?.balance?.toFixed(2) || guest.balance.toFixed(2)}
        </Typography>
      </Button>
    </Box>
  );
};

export default Balance;
