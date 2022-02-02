import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSoda } from "../../../../actions/sodas";
import useStyles from "./styles";
import trashIcon from "../../../../images/trashIcon.svg";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TableCell,
} from "@material-ui/core";

const Delete = ({ sodaId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleDelete = () => {
    setDeleteConfirmation(false);
    dispatch(deleteSoda(sodaId));
  };

  return (
    <>
      <TableCell
        className={classes.sodaCell}
        onClick={() => setDeleteConfirmation((prev) => !prev)}
        align="center"
      >
        <img className={classes.trashIcon} src={trashIcon} alt="trashIcon" />
      </TableCell>
      <Dialog
        open={deleteConfirmation}
        onClose={() => setDeleteConfirmation((prev) => !prev)}
      >
        <DialogTitle>Delete item?</DialogTitle>
        <DialogContent>
          <Button onClick={handleDelete}>Yes</Button>
          <Button onClick={() => setDeleteConfirmation(false)}>No</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Delete;
