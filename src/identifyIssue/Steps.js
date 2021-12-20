import React from "react";
import { Box } from "@mui/system";

import Todo from "./Todo";

const Steps = () => {
  const i = Todo.Identity;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {i.map((step) => (
        <div key={i.indexOf(step)}>{step}</div>
      ))}
    </Box>
  );
};

export default Steps;
