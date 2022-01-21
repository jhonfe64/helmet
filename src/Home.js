import React from 'react';
import HeadTags from './HeadTags';

function Home() {
  return (
    <div>
      <HeadTags title={"title from home"} metaDescription={"description from Home"} img={"https://imgur.com/YkZpD3x"} 
      url={"https://css-tricks.com"}
     
      />
      <h1>pagina del Home</h1>
      <a target="blank" href={`https://css-tricks.com`}
            data-layout="button_count">
            <h4>Compartir en facebook</h4>
      </a>
    </div>
  );
}

export default Home;
