import React from "react";

const Person = ({ person }) => {
  return (
    <div key={person.name}>
      <p>
        <b> {person?.name}</b>
      </p>
      <p> {person?.link}</p>
      <p> {person?.district}</p>
      <p> {person?.office}</p>
      <p> {person?.party}</p>
      <p> {person?.phone}</p>
      <p> {person?.state}</p>
    </div>
  );
};

export default Person;
