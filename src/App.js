
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login/login';
import Users from './pages/usersView/users';


function App() {
  return (
    <Router>
        <div>
        <Routes>
              <Route exact path='/' element={< Login />}></Route>
              <Route exact path='/login' element={< Login />}></Route>
              <Route exact path='/users' element={< Users />}></Route>

       </Routes>
       </div>
    </Router>
  );
}
export default App;
