import React from 'react';
import HeadTags from './HeadTags';

function About() {
  return(
    <div>
        <HeadTags title={"title from About"} metaDescription={"Description from About page"} img={"https://imgur.com/nS8AlRw"}  url={"https://css-tricks.com"}/>
        <h1>esta es la pagina de about</h1>
    </div>);
}

export default About;
