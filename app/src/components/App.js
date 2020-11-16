import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Lab from "./Lab";
import Doctor from "./Doctor";
import Login from "./Login";
import Contact from "./Contact";
import Messages from "./Messages";
import Pharmacy from "./Pharmacy";
import "./styles.css";

const App = () => {
  return (
    <Router basename={window.location.pathname}>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/lab" component={Lab} />
          <Route exact path="/doctor" component={Doctor} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/pharmacy" component={Pharmacy} />
          <Route exact path="/messages" component={Messages} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
