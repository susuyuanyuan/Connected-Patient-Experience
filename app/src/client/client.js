import axios from "axios";

const URL = "http://localhost:5000/api/patients";

// get users
export function getPatient(id) {
  return (dispatch, getState) => {
    axios
      .get(URL + "&id=" + id)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  };
}
