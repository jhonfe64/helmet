import React from 'react';
import Helmet from 'react-helmet';

function Users() {
  return <div>
       <Helmet>
        <title>tienda de ropa</title>
        <meta name="description" content="Pagina de users" />
        <meta property="og:url"              content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
        <meta property="og:type"               content="article" />
        <meta property="og:title"              content="titulo para la pagfina de users" />
        <meta property="og:description"        content="descripcion de la pagina users" />
        <meta property="og:image"              content="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" />
      </Helmet>
      <h1>esta es la pagina de users</h1>
  </div>;
}

export default Users;
