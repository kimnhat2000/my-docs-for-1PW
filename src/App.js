import React from "react";
import { Container } from "react-bootstrap";

import Steps from "./identifyIssue/Steps";
import Solution from './identifyIssue/Solution';

function App() {

  return (
    <Container>
      <h1>If the 1Password for Safari gets stuck at loading or does not unlock</h1>
      <Steps/>
      <Solution/>
    </Container>
  );
}

export default App;
