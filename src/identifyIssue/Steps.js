import React from "react";

import Todo from './Todo';

const Steps = () => {
  const i = Todo.Identity;
  return (
    <div>
      {i.map((step) => (
        <div key={i.indexOf(step)}>{step}</div>
      ))}
    </div>
  );
};

export default Steps;
