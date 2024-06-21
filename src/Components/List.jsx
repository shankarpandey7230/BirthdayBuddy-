import React from 'react';
import Person from './Person';

const List = ({ people }) => {
  return (
    <section className="mt-5 p-5">
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
