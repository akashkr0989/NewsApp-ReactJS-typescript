import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

interface MessageDialogProps {
    message: string;
    onClose: () => void;
    open: boolean,
    path?: string
}

const MessageDialog: React.FC<MessageDialogProps> = ({ message, onClose, open, path }) => {

    const navigate = useNavigate();

    const handleClose = () => {
        onClose(); // Close the dialog first
        if (path) {
            navigate('/login')
        }
    };


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Information</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MessageDialog;