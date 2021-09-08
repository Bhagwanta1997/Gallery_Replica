import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {AddPostForm} from './features/posts/AddPostForm';
import { PostsList } from './features/posts/PostsList';
import { Navbar } from './app/Navbar'
import Counter from './features/counter/Counter';
import Login from './features/Login/Login';
import Home from './features/Home/Home'
import { useSelector } from 'react-redux'
// import { PublicRoute, PrivateRoute } from './app/Auth';
import PublicRoute from './app/PublicRoute';
import PrivateRoute from './app/PrivateRoute';
const  App = () => {

  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <Router>
      <Navbar />
      <div >
        <Switch>
             {/* <PublicRoute 
              exact 
              isAuthenticated = {isAuthenticated}
              path="/"
              componenet = {Home}
            /> 
            <PublicRoute
              exact
              isAuthenticated={isAuthenticated}
              path = "/login"
              componenet = {Login}
            /> */}
            <Route to="/" component={Home}/>
            <Route to="/login" component={Login}/>
            {/* <PrivateRoute
              exact 
              isAuthenticated = {isAuthenticated}
              path="/dashboard"
              component = {PostsList}
            /> */}
          {/* <Route exact path="/"
            render={() => (
              <React.Fragment>
                <Home/>
                <Counter/>
                <AddPostForm/>
                <PostsList/>
              </React.Fragment>
            )}
          /> */}
          {/* <Route to="/login" component={Login}/> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
