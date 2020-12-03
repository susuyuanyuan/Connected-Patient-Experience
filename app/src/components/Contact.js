import React, { useEffect } from "react";
import Header from "./Header";
import { useAuth } from "./Auth";

const Contact = ({ history }) => {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
      history.push("/");
    }
  }, [auth, history]);

  if (!auth.user) {
    return null;
  }

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
