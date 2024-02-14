import React from 'react';

function Article(props) {
  const minutesToRead = props.minutesToRead || 0;
  const coffeeCups = Math.ceil(minutesToRead / 5);
  const bentoBoxes = Math.ceil(minutesToRead / 10);

  const coffeeCupIcons = Array(coffeeCups).fill('☕️');
  const bentoBoxIcons = Array(bentoBoxes).fill('🍱');

  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date || "January 1, 1970"}</small>
      <p>{props.preview}</p>
      <p>
        {coffeeCupIcons.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
        {bentoBoxIcons.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
        {` ${minutesToRead} min read`}
      </p>
    </article>
  );
}

export default Article;