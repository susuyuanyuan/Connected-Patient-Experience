import { useContext, createContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./action";

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const signIn = (userIn, passwordIn) => {
    dispatch(login(userIn, passwordIn));
  };

  const signOut = () => {
    dispatch(logout(null));
  };

  return {
    user,
    signIn,
    signOut,
  };
}
