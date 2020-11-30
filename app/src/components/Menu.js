import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { useAuth } from "./Auth";

const Menu = (props) => {
  const user = useAuth().user;
  const history = useHistory();

  if (!user) {
    history.push("/");
  }

  return (
    <div className="menu-container">
      <Header />
      <main className="main">
        <div>
          <div className="mt-1" style={{ color: "#FFFFFF" }}>
            NA
          </div>
          <div className="main-grid">
            <button
              className="display-button"
              onClick={() => history.push("/doctor")}
            >
              <i className="fas fa-user-md" style={{ color: "#34626c" }}></i>
              &nbsp;Select Doctor
            </button>
            <button
              className="display-button"
              onClick={() => history.push("/messages")}
            >
              <i className="fas fa-mail-bulk" style={{ color: "#34626c" }}></i>
              &nbsp;Messages
            </button>
            <button
              className="display-button"
              onClick={() => history.push("/lab")}
            >
              <i className="fas fa-vial" style={{ color: "#34626c" }}></i>
              &nbsp;View Lab Results
            </button>
          </div>
          <div className="main-grid">
            <button
              className="display-button"
              onClick={() => history.push("/pharmacy")}
            >
              <i className="fas fa-capsules" style={{ color: "#34626c" }}></i>
              &nbsp;Pharmacy
            </button>
            <button className="display-button">
              <i
                className="fas fa-book-medical"
                style={{ color: "#34626c" }}
              ></i>
              &nbsp;Medical Records
            </button>
            <button
              className="display-button"
              onClick={() => history.push("/contact")}
            >
              <i className="fa fa-phone" style={{ color: "#34626c" }}></i>
              &nbsp;Contact US
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;

/*
<main className="main">
        <div className="main-grid">
          <button
            className="display-button"
            onClick={() => history.push("/doctor")}
          >
            <i className="fas fa-user-md" style={{ color: "#0e918c" }}></i>
            &nbsp;Select Doctor
          </button>
        </div>
        <div className="main-grid">
          <button className="display-button">
            <i className="fas fa-mail-bulk" style={{ color: "#0e918c" }}></i>
            &nbsp;Messages
          </button>
        </div>
        <div className="main-grid">
          <button className="display-button" onClick={() => history.push("/lab")}>
            <i className="fas fa-vial" style={{ color: "#0e918c" }}></i>
            &nbsp;View Lab Results
          </button>
        </div>
        <div className="main-grid">
          <button className="display-button">
            <i className="fas fa-capsules" style={{ color: "#0e918c" }}></i>
            &nbsp;Pharmacy
          </button>
        </div>
        <div className="main-grid">
          <button className="display-button">
            <i className="fas fa-book-medical" style={{ color: "#0e918c" }}></i>
            &nbsp;Medical Records
          </button>
        </div>
      </main>
*/
