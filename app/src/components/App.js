import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from 'components/Menu';
import Lab from 'components/Lab';
import Login from 'components/Login';
import 'components/styles.css';

const App = () => {
  return (
    <Router basename={window.location.pathname}>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/lab" component={Lab} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
