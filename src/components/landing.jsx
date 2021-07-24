import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  rootcontainer: {
    width: '100vw',
    height: '100vh',
    position: "fixed",
    backgroundImage: 'url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_478389113_970647970450091_99776.jpg)',
  },
  row: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 'auto',
  },
  title: {
    fontSize: "8vw",
    color: "white",
    margin: "auto",
    justifyContent: "center"
  },
  subheading: {
    fontSize: "3vw",
    color: "white",
    alignItems: "normal",
    justifyContent: 'left',
    marginTop: '0px',
    marginBottom: '0px',
  },
  button: {
    position: 'relative',
    marginTop: '20vw',
    backgroundColor: 'DarkBlue',
    color: 'white',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'DarkBlue',
    },
  },
  styletext: {
    color: 'DarkBlue',
    fontSize: '2vw',
  },

});

export default function Landing () {
  const classes = useStyles();
  return (
    <div className={classes.rootcontainer}>
      <div className={classes.row}>
      <h1 className={classes.title}>Your very own Calendar</h1>
      <p className={classes.styletext}>Calendar.app</p>
      <h2 className={classes.subheading}>Tailored for you</h2>
    <Link to='/calendar'><Button className={classes.button} endIcon={<ExitToAppIcon/>}>Get Started</Button></Link>
    </div>
    </div>
    
    
  )
}