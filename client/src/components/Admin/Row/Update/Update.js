import React from "react";
import DialogForm from "../../DialogForm/DialogForm";

const Update = ({ isOpen, formData, onChange, onUpdate, onClose }) => {

  return (
    <DialogForm
      isOpen={isOpen}
      formData={formData}
      onChange={onChange}
      onUpdate={onUpdate}
      onClose={onClose}
      type="Update"
    />
  );
};

export default Update;
