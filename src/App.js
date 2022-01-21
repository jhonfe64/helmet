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
      <Helmet>
          <title>tienda de ropa</title>
          <meta name="description" content="la mejor tienda deropa de la ciudad" />
          <meta property="og:url"              content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
          <meta property="og:type"               content="article" />
          <meta property="og:title"              content="titulo general" />
          <meta property="og:description"        content="este es el metatag general para toda la tienda" />
          <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
      </Helmet>
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