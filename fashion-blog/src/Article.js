import React from 'react';
import image1 from './img/blog-image-1.jpg'; 
import image2 from './img/blog-image-2.jpg';

const Article = ({ title }) => {
  let imageSrc;
  if (title === "Blog Post 1") {
    imageSrc = image1;
  } else if (title === "Blog Post 2") {
    imageSrc = image2;
  }

  return (
    <article>
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas nunc sit amet tincidunt. Fusce sit amet ligula ut neque egestas cursus.</p>
      <a href="#continue" className="continue-link">continues...</a>
      {/* Use the imported image */}
      <img src={imageSrc} alt={`Image for ${title}`} />
    </article>
  );
};

export default Article;
