import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ErrorDialog({ open, error, onClose }) {
    let handleDialogClose = (event) => onClose(event);

    return (
        <Dialog
            open = { open }
            onClose = { () => handleDialogClose() }
            aria-describedby="alert-dialog-description">
            <DialogContent>
                <DialogTitle id="form-dialog-title">Error</DialogTitle>
                <DialogContentText id="alert-dialog-description">
                    { error }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick = { () => handleDialogClose() } color="primary">
                    Got it!
                </Button>
            </DialogActions>
        </Dialog>
    );
}