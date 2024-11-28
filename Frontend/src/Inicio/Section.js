import React from 'react';

function Section({ title, description, items, imgSrc, imgAlt }) {
  return (
    <div className="coluna">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} {item.price && `- ${item.price}`}
          </li>
        ))}
      </ul>
      <img src={imgSrc} alt={imgAlt} height={200} width="200" />
    </div>
  );
}

export default Section;
