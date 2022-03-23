import React from 'react';
import './App.css';
import Login from './components/Login';
import Task from './components/Task';
import Welcome from './components/WelcomePage';

import {
  BrowserRouter as Router, 
  Routes,
  Route, 
} from 'react-router-dom'; 

function App() {

  return(

  <Router>
      <div className="container">
        <Routes>
          <Route path = "/login" element= {<Login />}>
          </Route>
          <Route path = "/task" element= {<Task />}>
          </Route>
          <Route path = "/" element = {<Welcome />}>
          </Route>
        </Routes>
      </div>
    </Router>

  );

    

}

export default App;
