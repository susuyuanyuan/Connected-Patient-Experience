import {
  FindUser,
  GetUser,
  AddMessage,
  AddPrescription,
  FulfillPrescription,
} from "../client/client";

function setLoading() {
  return {
    type: "SET_STATUS",
    status: "loading",
  };
}

function setIdle() {
  return {
    type: "SET_STATUS",
    status: "idle",
  };
}

function setError(error) {
  return {
    type: "SET_ERROR",
    error,
  };
}

function setUser(user) {
  return {
    type: "SET_USER",
    user,
  };
}

export function login(username, password) {
  return (dispatch, getState) => {
    FindUser(username, password)
      .then((res) => {
        if (!res || !res.data) {
          dispatch(setError("Invalid username and password"));
          window.alert("Invalid username and password");
          return;
        }
        res.data.messages.sort((a, b) => {
          return a.date.localeCompare(b.date);
        });
        res.data.medicalRecords.sort((a, b) => {
          return new Date(b.recordedDate) - new Date(a.recordedDate);
        });
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError(err));
        window.alert(err);
      });
  };
}

export function logout() {
  return (dispatch, getState) => {
    dispatch(setUser(null));
    dispatch(setIdle());
  };
}

export function update() {
  return (dispatch, getState) => {
    const user = getState().user;
    if (!user) {
      return;
    }
    dispatch(setLoading());
    GetUser(user._id)
      .then((res) => {
        if (!res) {
          dispatch(setIdle());
          return;
        }
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError(err));
      });
  };
}

export function addMessage(title, message, history) {
  return (dispatch, getState) => {
    if (!getState().user) {
      return;
    }
    AddMessage(getState().user._id, {
      subject: title,
      content: message,
      date: new Date(),
    })
      .then(() => {
        window.alert("Message send success");
        history.push("/home");
        dispatch(update());
      })
      .catch((err) => {
        console.log(err);
        window.alert("Failed to send message");
      });
  };
}

export function addPrescription(prescription, history) {
  return (dispatch, getState) => {
    const user = getState().user;
    if (!user) {
      return;
    }
    AddPrescription(user._id, prescription)
      .then(() => {
        dispatch(update());
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fulfillPrescription(prescriptionIdsSet) {
  return (dispatch, getState) => {
    const user = getState().user;
    if (!user) {
      return;
    }
    FulfillPrescription(user._id, Array.from(prescriptionIdsSet))
      .then(() => {
        dispatch(update());
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
