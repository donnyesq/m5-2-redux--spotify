import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import GlobalStyle from "./GlobalStyle";

const DEFAULT_ARTIST_ID = "2RhgnQNC74QoBlaUvT4MEe";
const defaultArtistPath = `/artists/${DEFAULT_ARTIST_ID}`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/artists/:id">
            <div>Artists Page</div>
          </Route>
          <Route exact path="/">
            <Redirect to={{ pathname: defaultArtistPath }} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
