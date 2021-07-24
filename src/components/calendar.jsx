import React, { useState, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, Typography, makeStyles } from '@material-ui/core';
import { Delete } from '@material-ui/icons'
import FormModal from './formModal.jsx';

const URL = 'https://an-app-backend.herokuapp.com/calendar'

const useStyles = makeStyles({
  container: {
    maxWidth: "24vw",
    width: "24vw",
    flexGrow: '4',
    margin: "0.6vw",
    backgroundColor: "white",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingBottom: "0px",
  },
  row: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: "3vw",
    color: "white",
  },
  button: {
    backgroundColor: 'DarkBlue',
    color: 'white',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'DarkBlue',
    },
  },
  eventTitle: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  locationText: {
    color: '#8B8B00',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%'
  }
});

export default function Calendar() 
{
  const classes = useStyles();
  const [events, setEvents] = useState([])

  async function getEvents() 
  {
    let response = await fetch(URL, {method: 'GET'})
    let data = await response.json()
    setEvents(data)
  }  
  useEffect(() => {getEvents()}, [])

  return (
    <div className={classes.page}>
      <h1 className={classes.title}>Your Events</h1>
      <div className={classes.row}>
        {events && events.map(item => 
          {
            return (
              <Card key={item.id} className={classes.container}>
                <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.recipeTitle}>
                  {item.event}
                </Typography>
                <Typography variant="subtitle1">
                  {item.time}
                </Typography>
                <Typography className={classes.locationText}variant="subtitle2">
                  {item.location}
                </Typography>
                </CardContent>
                <CardActions className={classes.page}>
                  <div className={classes.buttonContainer}>
                    <FormModal {...item} />
                    <Button linksize="small" color="primary" className={classes.button} endIcon={<Delete/>}
                      onClick={() => 
                        {
                          fetch(URL, 
                          {
                            method: 'DELETE',
                            headers: {'Content-Type': 'application/json; charset=utf-8'},
                            body: JSON.stringify({id: item.id})
                          });

                          getEvents();
                        }}>
                      Remove
                    </Button>
                  </div>
                </CardActions>
              </Card>)
          })
        }
      </div>
    </div>
  )
}