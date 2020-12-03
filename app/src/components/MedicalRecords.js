import React, { useEffect } from "react";
import Header from "./Header";
import { useAuth } from "./Auth";
import { useHistory } from "react-router-dom";

const MedicalRecords = () => {
  const auth = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!auth.user) {
      history.push("/home");
    }
  }, [auth, history]);

  const medicalRecords = auth.user.medicalRecords;

  return (
    <div className="section-container">
      <Header />
      <table className="table table-striped">
        <thead className="thead-primary">
          <tr className="thead">
            <th>Condition</th>
            <th>Recorded Date</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {medicalRecords.map((record) => {
            return (
              <tr key={record._id}>
                <td>{record.conditionName}</td>
                <td>{record.recordedDate}</td>
                <td>{record.note}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="back-button mt-5"
        onClick={() => history.push("/home")}
      >
        Back to Menu
      </button>
    </div>
  );
};

export default MedicalRecords;
