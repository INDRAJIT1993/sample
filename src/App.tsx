import React from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';
import Profile from './components/profile/profile'
import Clevers from './components/clevers/clevers'
import Navbar from './components/Navbar/Navbar';
import appbar from './components/appbar/appbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/admin' exact component={appbar} />
          <Route path='/clever' component={() => <Clevers/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
