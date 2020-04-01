import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login/Login'
import Profile from './Profile/Profile'
import Auth from './Auth'

const Router = (props) => (
  <Switch>
    <Route exact path='/' component={Login}/>
    <PrivateRoute path="/profile" component={Profile} />
  </Switch>
)


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>Auth.isAuthenticated() ?
    (<Component {...props} />) :
    (<Redirect to={{pathname: "/"}}/>)
  }/>
)

export default Router
