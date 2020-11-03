import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from 'components/Menu';
import Lab from 'components/Lab';
import Login from 'components/Login';
import 'components/styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Menu} />
          <Route path={`${match.url}/lab`} component={Lab} />
          <Route path={`${match.url}/login`} component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
