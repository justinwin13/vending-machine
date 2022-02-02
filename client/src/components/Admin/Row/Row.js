import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSoda } from "../../../actions/sodas";
import { TableRow, TableCell } from "@material-ui/core";
import Delete from "./Delete/Delete";
import Update from "./Update/Update";
import useStyles from "./styles";

const Row = ({ soda }) => {
  const { _id, productName, description, cost, quantity } = soda;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleClick = (soda) => {
    const newSoda = { ...soda };
    delete newSoda.image;
    setFormData(newSoda);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleUpdate = () => {
    dispatch(updateSoda(formData._id, formData));
    handleClose();
  };

  return (
    <>
      <Update
        isOpen={isOpen}
        formData={formData}
        onClose={handleClose}
        onChange={handleChange}
        onUpdate={handleUpdate}
      />
      <TableRow className={classes.sodaRow} key={soda._id}>
        <TableCell
          onClick={() => handleClick(soda)}
          className={classes.sodaCell}
        >
          {productName}
        </TableCell>
        <TableCell
          onClick={() => handleClick(soda)}
          className={classes.sodaCell}
          align="left"
        >
          {description}
        </TableCell>
        <TableCell
          onClick={() => handleClick(soda)}
          className={classes.sodaCell}
          align="left"
        >
          ${cost.toFixed(2)}
        </TableCell>
        <TableCell
          onClick={() => handleClick(soda)}
          className={classes.sodaCell}
          align="left"
        >
          {quantity}
        </TableCell>
        <TableCell
          onClick={() => handleClick(soda)}
          className={classes.sodaCell}
          align="left"
        >
          {_id}
        </TableCell>
        <Delete sodaId={_id} />
      </TableRow>
    </>
  );
};

export default Row;
