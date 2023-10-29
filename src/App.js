import { Button } from "@mui/material";
import React from "react";
import { jsx, css, Global, ClassNames } from '@emotion/react'


function App() {
  return (
    <div className="App">
      Hello world
      <Button css={{color:'hotpink'}} variant="contained">Push me</Button>
      <Button
        sx={{ backgroundColor: 'pink', '&:hover': { backgroundColor: 'purple' } }}
      >
        Styled Button
      </Button>
    </div>
  );
}

export default App;
