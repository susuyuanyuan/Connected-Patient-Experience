import React from "react";
import logo from "./images/healthcare.svg";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-note mt-1">
        <img alt="" src={logo} width="50" height="50" />
        <p>&nbsp;A Professional Medical Team make you smile like sunshine</p>
      </div>
      <div className="header mt-3">Sunshine Clinics</div>
    </header>
  );
};

export default Header;
