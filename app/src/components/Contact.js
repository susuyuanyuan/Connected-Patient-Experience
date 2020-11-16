import React from "react";
import Header from "./Header";

const Contact = ({ history }) => {
  return (
    <div className="section-container">
      <Header />
      <main className="main">
        <p>Phone: 1-123-456-7891</p>
        <p>Email: service.sunshine@sunshineclinic.org</p>
        <button
          className="back-button mt-5"
          onClick={() => {
            history.push("/");
          }}
        >
          Back to Menu
        </button>
      </main>
    </div>
  );
};

export default Contact;
