import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './Menu';
import Lab from './Lab';
import Login from './Login';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/lab" component={Lab} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
