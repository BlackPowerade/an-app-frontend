import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/nav'
import Landing from './components/landing'
import Calendar from './components/calendar'
import NewEvent from './components/newevent'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/calendar/" exact component={Calendar}/>
        <Route path="/newevent/" component={NewEvent}/>
      </Switch>
    </div>
  )
}

export default App;