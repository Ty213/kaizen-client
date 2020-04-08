import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './views/Login/Login'

import Profile from './views/Profile/Profile'
import { auth } from './utils/auth'

const Router = (props) => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <Route exact path='/newUser' component={Login} />
    <PrivateRoute exact path="/" component={Profile} />
  </Switch>
)


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>auth.isAuthenticated() ?
    (<Component {...props} />) :
    (<Redirect to={{pathname: "/login"}}/>)
  }/>
)

export default Router
