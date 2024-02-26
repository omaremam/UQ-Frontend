import { useState, useEffect } from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Snackbars = ({
    snackbarOpen,
    snackBarState,
    snackBarMessage,
}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (snackbarOpen) {
            setOpen(true);
        }
    }, [snackbarOpen]);

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={snackBarState}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Snackbars;