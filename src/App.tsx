import React from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';
import Profile from './components/profile/profile'
import Clevers from './components/clevers/clevers'
import Navbar from './components/Navbar/Navbar';
import ButtonAppBar from './components/appbar/appbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path="/admin" component={() => (<ButtonAppBar myProp="Admin" authority="normal"/>)}/>
          <Route path="/rootadmin" component={() => (<ButtonAppBar myProp="Admin" authority="root"/>)}/>
          <Route path="/teacher" component={() => (<ButtonAppBar myProp="Teacher" />)}/>
          <Route path='/clever' component={() => <Clevers/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
