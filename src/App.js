import React from "react";
import Helmet from "react-helmet";


import About from "./About";
import Home from "./Home";
import Users from "./Users";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <div className="App container pt-5">
      <div className="pb-5">
        <Link className="me-3" to="/">HOME</Link>
        <Link className="me-3" to="/about">ABOUT</Link>
        <Link className="me-3" to="/users">USERS</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users/>} />
      </Routes>
    </div>
  );
}