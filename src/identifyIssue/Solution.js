import { Container } from "react-bootstrap";

import Todo from './Todo';

const Solution = () => {
    const i=Todo.Solution
  return (
    <Container>
      <h2>Solutions</h2>
      <div>
      {i.map((solution) => (
        <div key={i.indexOf(solution)}>{solution}</div>
      ))}
    </div>
    </Container>
  );
};

export default Solution;
