import React, { useState } from "react";
import Header from "./Header";

const Pharmacy = ({ history }) => {
  const prescriptions = ["Aspirin", "Cetirizine", "Benzydamine"];
  const [message, setMessage] = useState("");
  return (
    <div className="section-container">
      <Header />
      <main className="ml-5 mt-3">
        <p>Prescriptions:</p>
        <ul>
          {prescriptions.map((prescription) => {
            return (
              <li className="mt-5" key={prescription}>
                <p className="mr-1">{prescription}</p>
                <button
                  onClick={() =>
                    setMessage(message + prescription + " requested.       ")
                  }
                >
                  Click to Refill
                </button>
              </li>
            );
          })}
        </ul>
        <p>{message}</p>
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

export default Pharmacy;
