import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from 'components/Menu';
import Lab from 'components/Lab';
import Login from 'components/Login';
import 'components/styles.css';

const App = () => {
  return (<h1>Hello, world!</h1>);
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
