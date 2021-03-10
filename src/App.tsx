import React from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';
import Profile from './components/profile/profile'
import Clever from './components/clever/clever'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/clever' component={() => <Clever/>}/>
          {/* <Route path='/products' component={Products} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
