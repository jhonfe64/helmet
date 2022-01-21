import React from 'react';
import Helmet from 'react-helmet';

function About() {
  return <div>
      <Helmet>
        <title>tienda de ropa</title>
        <meta name="description" content="About de la tienda" />
        <meta property="og:url"              content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
        <meta property="og:type"               content="article" />
        <meta property="og:title"              content="titulo para el About de la tienda" />
        <meta property="og:description"        content="esta es la decripcion del ABOUT de la tienda" />
        <meta property="og:image"              content="https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg" />
      </Helmet>
      <h1>esta es la pagina de about</h1>
  </div>;
}

export default About;
