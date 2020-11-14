import React, { Fragment, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactLoading from 'react-loading';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import WatchComponent from './components/WatchComponent';
import PrivateRoute from './routing/PrivateRoute';
import UserContext from './context/UserContext';

function App() {

  const userContext = useContext(UserContext);
  const isLoggedIn = userContext.user !== null ? true : false;

  if (userContext.loading) {
    return (
      <div className="loader">
        <ReactLoading type={"spin"} color={"#fff"} height={50} width={50} />
      </div>
    )
  }

  return (
    <Fragment>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <PrivateRoute exact path="/watch" component={WatchComponent} isLoggedIn={isLoggedIn} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
