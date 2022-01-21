import React from 'react';
import Helmet from 'react-helmet';

function Home() {
  return <div>
      <Helmet>
          <title>tienda de ropa</title>
          <meta name="description" content="Home de la tienda" />
          <meta property="og:url"              content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
          <meta property="og:type"               content="article" />
          <meta property="og:title"              content="titulo para el home de la tienda" />
          <meta property="og:description"        content="esta es la decripcion del home de la tienda" />
          <meta property="og:image"              content="https://media.gettyimages.com/photos/bogota-at-sunset-picture-id107069344?s=612x612" />
      </Helmet>
      <h1>esta es la pagina del home</h1>
  </div>;
}

export default Home;
