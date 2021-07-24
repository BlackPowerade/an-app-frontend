import React, { useState } from 'react'
import { Paper, TextField, Snackbar, makeStyles, Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Alert from '@material-ui/lab/Alert';

const URL = 'https://an-app-backend.herokuapp.com/calendar'


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "3vw",
    color: "white",
  },
  page: {
    margin: 'auto',
    paddingBottom: "2vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "25vw",
  },
  textbox: {
    margin: '2vh',
    width: '90%',
  },
  button: {
    backgroundColor: 'DarkBlue',
    color: 'white',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'DarkBlue',
    },
  },
});

export default function NewEvent () {

  const classes = useStyles();
  const [event, setEvent] = useState();
  const [location, setLocation] = useState();
  const [time, setTime] = useState();
  const [open, setOpen] = useState(false);

  function toggleOpen() { setOpen(!open) }

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Got Plans?</h1>
      <Paper className={classes.page}>
        <form className={classes.form} onSubmit={(e) => 
        {
            toggleOpen();
            e.target.reset();
            e.preventDefault();
            fetch(URL, 
            {
              method: 'POST',
              headers: {'Content-Type': 'application/json; charset=utf-8'},
              body: JSON.stringify({event: event, location: location, time: time})
            })
        }}>                
          <TextField id="event" label="Event" variant="outlined" className={classes.textbox} onChange={(e) => setEvent(e.target.value)}/>
          <TextField id="time" label="Time" variant="outlined" className={classes.textbox} onChange={(e) => setTime(e.target.value)}/>
          <TextField id="location" label="Location" variant="outlined" className={classes.textbox} onChange={(e) => setLocation(e.target.value)}/>
          <Button endIcon={<CloudUploadIcon />} type="submit" className={classes.button}> Submit </Button>
        </form>
        <Snackbar open={open} autoHideDuration={2000} onClose={toggleOpen}>
          <Alert variant="filled" severity="success">
            Event Added
          </Alert>
        </Snackbar>
      </Paper>
    </div>
  )
}