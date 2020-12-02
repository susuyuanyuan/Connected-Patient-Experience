const userReducer = (
  state = { user: null, status: "idle", error: "" },
  action
) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
        status: "success",
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "SET_ERROR":
      return {
        ...state,
        status: "error",
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
