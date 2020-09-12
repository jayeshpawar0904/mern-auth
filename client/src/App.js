import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/navbar";
import Landing from "./components/layout/landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/auth/register";
import Login from "./components/auth/login";

class App extends Component {
  render() {
    return (
      <div className="Ap">
         <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
      </div>
    );
  }
}
export default App;
