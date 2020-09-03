import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Room from "./pages/Room"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"

const App=()=>{
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Room} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </Router>
  ) 

}

export default App