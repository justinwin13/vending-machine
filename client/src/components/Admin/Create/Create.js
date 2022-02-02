import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSoda } from "../../../actions/sodas";
import DialogForm from "../DialogForm/DialogForm";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

const Create = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    cost: null,
    quantity: null,
    image: "",
  });

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleImageUpload = (base64) => {
    setFormData({ ...formData, image: base64 });
  };

  const handleCreate = (formData) => {
    dispatch(createSoda(formData));
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        className={classes.createBtn}
        variant="contained"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Create Soda
      </Button>
      <DialogForm
        isOpen={isOpen}
        formData={formData}
        onChange={handleChange}
        onCreate={handleCreate}
        onClose={handleClose}
        onImageUpload={handleImageUpload}
        type="Create"
      />
    </>
  );
};

export default Create;
