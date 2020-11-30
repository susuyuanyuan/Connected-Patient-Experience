import { useContext, createContext, useState } from "react";

import { FindUser } from "../client/client";

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
  const [user, setUser] = useState(null);

  const signin = (userIn, passwordIn, onSuccess, onFailure) => {
    FindUser(userIn, passwordIn)
      .then((res) => {
        if (!res) {
          return;
        }
        setUser(res.data);
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
        onFailure();
      });
  };

  const signout = (onSignOut) => {
    setUser(null);
    onSignOut();
  };

  return {
    user,
    signin,
    signout,
  };
}
