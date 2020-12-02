import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { useAuth, ProvideAuth } from "./Auth";

import Menu from "./Menu";
import Lab from "./Lab";
import Doctor from "./Doctor";
import Login from "./Login";
import Contact from "./Contact";
import Messages from "./Messages";
import Pharmacy from "./Pharmacy";
import "./styles.css";

export default function App() {
  return (
    <ProvideAuth>
      <Router basename="connected-patient-experience-app">
        <div>
          <AuthButton />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Menu} />
            <Route exact path="/lab" component={Lab} />
            <Route exact path="/doctor" component={Doctor} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/pharmacy" component={Pharmacy} />
            <Route exact path="/messages" component={Messages} />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome! {auth.user.name + " "}
      <button
        onClick={() => {
          auth.signOut(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
