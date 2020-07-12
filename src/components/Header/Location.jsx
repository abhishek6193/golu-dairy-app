import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import LocationForm from './LocationForm'

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));

const Location = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    // const handleOpen = () => {
    //     setOpen(true)
    // };
    
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <Grid item>
            <Grid container alignItems='center' style={{cursor: 'pointer'}}>
                <div className={classes.root}>{"Select Location"}</div>
                <ExpandMoreOutlinedIcon fontSize="small"/>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <LocationForm />
            </Modal>
        </Grid>
    );
}

export default Location
