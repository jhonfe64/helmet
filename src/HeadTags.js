import React from 'react';
import Helmet from 'react-helmet';

function HeadTags(props) {

    const {
        title = "name appp",
        metaDescription = "default description",
        img = "www.imagen.com",
        url = "http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
     } = props

  return(
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription}/>
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img}/>  
    </Helmet>
  ) ;
}

export default HeadTags;
