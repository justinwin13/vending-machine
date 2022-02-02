import React from "react";
import FileBase from "react-file-base64";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";

const DialogForm = ({
  isOpen,
  formData,
  onChange,
  onUpdate,
  onCreate,
  onClose,
  onImageUpload,
  type,
}) => {
  const classes = useStyles();

  return (
    <Dialog maxWidth="lg" open={isOpen} onClose={onClose}>
      <DialogTitle className={classes.dialogTitle}>{type} soda</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <form>
          <TextField
            required
            margin="normal"
            fullWidth={true}
            variant="outlined"
            label="product name"
            onChange={(e) => onChange(e, "productName")}
            value={formData.productName}
          ></TextField>
          <TextField
            required
            margin="normal"
            fullWidth={true}
            variant="outlined"
            label="description"
            onChange={(e) => onChange(e, "description")}
            value={formData.description}
          ></TextField>
          <TextField
            required
            margin="normal"
            fullWidth={true}
            variant="outlined"
            label="cost"
            onChange={(e) => onChange(e, "cost")}
            value={formData.cost}
          ></TextField>
          <TextField
            required
            margin="normal"
            fullWidth={true}
            variant="outlined"
            label="quantity"
            onChange={(e) => onChange(e, "quantity")}
            value={formData.quantity}
          ></TextField>
          {type === "Create" && (
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => onImageUpload(base64)}
            />
          )}
        </form>
        <Box className={classes.buttonGroup}>
          <Button
            className={`${classes.btn} ${classes.button}`}
            onClick={
              type === "Update"
                ? () => onUpdate(formData)
                : () => onCreate(formData)
            }
            variant="contained"
          >
            {type}
          </Button>
          <Button
            className={`${classes.cancelBtn} ${classes.button}`}
            onClick={onClose}
            variant="contained"
          >
            Cancel
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
