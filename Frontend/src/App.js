import React, { useState } from "react";
import { connect } from "react-redux";
import { BooksDetail }  from "./Components/booksDetail";
import Homepage from "./Components/Homepage/homepage";
import Login from "./Components/Login/login";
import Register from "./Components/Register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            exact path="/" 
            element = 
            {
              user && user._id ? 
                <Homepage setLoginUser = {setLoginUser} />  : 
                <Login setLoginUser = {setLoginUser} /> 
          }  />
          
          <Route 
            path="/login" 
            element = {
              <Login setLoginUser={setLoginUser}/> 
            } 
          />
          <Route path="/register" element={<Register /> } />
        </Routes>  
      </Router>   
    </div>
  );
}

export default connect()(App);

