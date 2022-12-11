import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Router() {
    return (
      <Router>
        
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/bookinfo/:id">
              <About />
            </Route>
          </Switch>
        
      </Router>
    );
  }
