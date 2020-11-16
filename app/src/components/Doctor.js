import React, { useState } from "react";
import Header from "./Header";

const Doctor = ({ history }) => {
  const [doctor, setDoctor] = useState(null);

  return (
    <div className="section-container">
      <Header />
      <main className="main">
        <div className="select-doctor mt-5">
          <label>Select your primary doctor:</label>
          <select
            name=""
            className="ml-3"
            id="doctor"
            onChange={(e) => setDoctor(e.target.value)}
          >
            <option value="csu">Chih-Yuan Su</option>
            <option value="xlou">Xiaochu Lou</option>
            <option value="ychen">Yian Chen</option>
          </select>
        </div>
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

export default Doctor;
