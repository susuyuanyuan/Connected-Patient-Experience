import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useAuth } from "./Auth";
import { addPrescription, fulfillPrescription } from "./action";
import { useDispatch } from "react-redux";

const Pharmacy = ({ history }) => {
  const drugNames = ["Aspirin", "Cetirizine", "Benzydamine"];

  const [selected, setSelected] = useState(new Set());

  const auth = useAuth();
  const user = auth.user;
  const dispatch = useDispatch();

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
                        dispatch(
                          addPrescription({
                            drugName: drugName,
                            quantity: 1,
                            requestDate: new Date(),
                          })
                        );
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
              dispatch(fulfillPrescription(selected));
            } else {
              window.alert("Please at least select one entry");
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
