import React from 'react';
import Login from './components/login/login.js'
import Home from './components/home'
import Protected from './components/protectedRoute/protected'
import {history} from './history'
import  {Router,Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
        <div className="container-fluid">    
        <div className="row">
        
          <Router history={history}>
                <Switch >
                  <Route path="/" exact component={Login} />:
                  <Protected path="/home"  component={Home} />
                </Switch>
                </Router>
     
        </div>
        
          </div>
  );
}
export default App;
