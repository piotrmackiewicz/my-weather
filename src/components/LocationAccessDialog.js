import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const LocationAccessDialog = ({ show }) => (
  <Dialog
    open={show}
    disableBackdropClick={true}
    aria-describedby="alert-dialog-description"
  >
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Please allow access to your location in order to use this app
      </DialogContentText>
    </DialogContent>
  </Dialog>
);

export default LocationAccessDialog;
