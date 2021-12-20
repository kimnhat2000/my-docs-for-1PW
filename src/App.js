import React from "react";
import { Container } from "@mui/material";

import Header from "./Header";
import Steps from "./identifyIssue/Steps";
import Solution from "./identifyIssue/Solution";

import "@fontsource/roboto/300.css";

function App() {
  return (
    <Container>
      <Header />
      <Steps />
      <Solution />
    </Container>
  );
}

export default App;
