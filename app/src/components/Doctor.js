import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useAuth } from "./Auth";
import { SetDoctor } from "../client/client";

const Doctor = ({ history }) => {
  let auth = useAuth();

  const [doctor, setDoctor] = useState(auth.user ? auth.user.doctorName : "");

  useEffect(() => {
    if (!auth.user) {
      history.push("/");
    }
  }, [auth, history]);

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
            value={doctor}
            onChange={(e) => {
              setDoctor(e.target.value);
            }}
          >
            <option value="Chih-Yuan Su">Chih-Yuan Su</option>
            <option value="Xiaochu Lou">Xiaochu Lou</option>
            <option value="Yian Chen">Yian Chen</option>
          </select>
        </div>
        <button
          className="back-button mt-5"
          onClick={() => {
            if (doctor) {
              SetDoctor(auth.user._id, doctor);
              auth.user.doctorName = doctor;
            }
            history.push("/home");
          }}
        >
          Back to Menu
        </button>
      </main>
    </div>
  );
};

export default Doctor;
