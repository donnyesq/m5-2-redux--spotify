import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>Hello</Router>
    </>
  );
};

export default App;
