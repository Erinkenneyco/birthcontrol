import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import { Container } from 'reactstrap';
import UserProvider from "./context";




function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <TopNav />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={() => <Auth action="login" />}  />
              <Route exact path="/signup" component={() => <Auth action="signup" />}  />
              <Route exact path="/profile" component={Profile} />
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
