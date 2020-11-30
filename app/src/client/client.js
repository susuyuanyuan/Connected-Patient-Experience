import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL
  ? process.env.REACT_APP_SERVER_URL
  : "http://localhost:5000";
const PATIENT_API = SERVER_URL + "/api/patients";

export async function FindUser(userName, password) {
  return await axios.get(
    PATIENT_API + "?username=" + userName + "&password=" + password
  );
}
