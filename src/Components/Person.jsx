import React from 'react';

const Person = ({ image, name, age }) => {
  return (
    <article className="person rounded bg-shadow">
      <img src={image} alt={image} className="img" />
      <div className="text-center">
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person;
