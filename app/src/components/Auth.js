import { useContext, createContext, useState } from "react";

import { FindUser, GetUser } from "../client/client";

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

  const signIn = (userIn, passwordIn, onSuccess, onFailure) => {
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

  const signOut = (onSignOut) => {
    setUser(null);
    onSignOut();
  };

  const update = () => {
    if (!user) {
      return;
    }
    GetUser(user._id).then((res) => {
      if (!res) {
        return;
      }
      setUser(res.data);
    });
  };

  return {
    user,
    signIn,
    signOut,
    update,
  };
}
