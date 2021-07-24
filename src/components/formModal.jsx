import React, { useState } from "react";
import { Modal, Button, Backdrop, Fade, Paper, makeStyles, Input } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const URL = 'https://an-app-backend.herokuapp.com/calendar'

const useStyles = makeStyles({
    modal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "25vw",
        padding: "12px"
    },
    textbox: {
        margin: '2vh',
        width: '90%',
    },
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h2: {
        display: 'flex',
        justifyContent: 'center'
    } 
});



export default function FormModal(props) 
{
    const [open, setOpen] = useState(false);
    const [event, setEvent] = useState(props.event);
    const [location, setLocation] = useState(props.location);
    const [time, setTime] = useState(props.time);
    const classes = useStyles();

    function toggleOpen()
    {
        setOpen(!open)
    }

    return(
        <div>
            
            <Button variant="contained" color="secondary" onClick={toggleOpen} endIcon={<Edit/>}>
                Edit
            </Button>

            <Modal
                className={classes.modal}
                open={open}
                onClose={toggleOpen}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper>
                        <h2 className={classes.h2}>Edit Event</h2>
                        <form className={classes.form} noValidate autoComplete="off">
                            <Input defaultValue={props.event} className={classes.textbox} onChange={(e) => setEvent(e.target.value)}/>
                            <Input defaultValue={props.time} className={classes.textbox} onChange={(e) => setTime(e.target.value)}/>
                            <Input defaultValue={props.location} className={classes.textbox} onChange={(e) => setLocation(e.target.value)}/>
                            <Button variant="contained" color="secondary" type="submit"
                            onClick={(e) => 
                                {
                                fetch(URL, 
                                {
                                    method: 'PATCH',
                                    headers: {'Content-Type': 'application/json; charset=utf-8'},
                                    body: JSON.stringify({id: props.id, event: event, time: time, location: location})
                                });
                                }}>
                            Update
                            </Button>
                        </form>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    )



}
