import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, Toolbar, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  button: {
    color: 'white',
    fontWeight: "bold"
  }
}))


function Navbar() {
  const classes = useStyles();
  return (
    <AppBar style={{backgroundColor: 'DarkBlue'}} position="static">
      <Toolbar>
        <Link to="/">
          <Button className={classes.button}>Calendar.app</Button>
        </Link>
        <Link to="/calendar">
          <Button className={classes.button}>My Events</Button>
        </Link>
        <Link to="/newevent">
          <Button className={classes.button}>Add New Event</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar;