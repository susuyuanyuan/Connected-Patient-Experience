import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useAuth } from "./Auth";
import { AddPrescription, FulfillPrescription } from "../client/client";

const Pharmacy = ({ history }) => {
  const drugNames = ["Aspirin", "Cetirizine", "Benzydamine"];

  const [selected, setSelected] = useState(new Set());

  const auth = useAuth();
  const user = auth.user;

  useEffect(() => {
    if (!auth.user) {
      history.push("/");
    }
  }, [auth, history]);

  return (
    <div className="section-container">
      <Header />
      <main className="ml-5 mt-3">
        <h1 className="text-center">Add Prescriptions Here</h1>
        <table className="table table-striped">
          <thead className="thead-primary">
            <tr className="thead">
              {drugNames.map((drugName) => {
                return <th key={drugName}>{drugName}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {drugNames.map((drugName) => {
                return (
                  <td key={drugName}>
                    <button
                      onClick={() => {
                        AddPrescription(user._id, {
                          drugName: drugName,
                          quantity: 1,
                          requestDate: new Date(),
                        }).then(() => {
                          auth.update();
                        });
                      }}
                    >
                      Click to Refill
                    </button>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
        <table className="table table-striped">
          <thead className="thead-primary">
            <tr className="thead">
              <th>Drug Name</th>
              <th>Quantity</th>
              <th>Requested Date</th>
              <th>Fulfilled</th>
            </tr>
          </thead>
          <tbody>
            {user
              ? user.prescriptions.map((prescription) => {
                  return (
                    <tr key={prescription._id} className="text-capitalize">
                      <td>{prescription.drugName}</td>
                      <td>{prescription.quantity}</td>
                      <td>{prescription.requestDate}</td>
                      <td>
                        <input
                          type="checkbox"
                          value={prescription._id}
                          checked={selected.has(prescription._id)}
                          onChange={() => {
                            const id = prescription._id;
                            if (selected.has(id)) {
                              selected.delete(id);
                            } else {
                              selected.add(id);
                            }
                            setSelected(new Set(selected));
                          }}
                        />
                        &nbsp;
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        <button
          className="back-button mt-5"
          onClick={() => {
            if (selected.size !== 0) {
              FulfillPrescription(user._id, Array.from(selected)).then(() => {
                auth.update();
              });
            } else {
              console.log("didn't select anything");
            }
          }}
        >
          Confirm Fulfilled
        </button>
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
