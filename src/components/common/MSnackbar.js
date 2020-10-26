import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const MSnackbar = ({ open, close, message }) => (
  <Snackbar
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    open={open}
    autoHideDuration={3000}
    onClose={close}
    message={<span id="snackbar-m-id">{message}</span>}
    ContentProps={{ "aria-describedby": "snackbar-m-id" }}
    action={[
      <IconButton
        onClick={close}
        color="inherit"
        key="close"
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>,
    ]}
  />
);

export default MSnackbar;
