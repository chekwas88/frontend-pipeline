import * as React from "react";
const useSessionStorage = () => {
  // const [token, setToken] = React.useState<String | undefined>(() =>
  // 		JSON.parse(window.sessionStorage.getItem(storageKey) ) || ""
  // );
  const [token, setToken] = React.useState<String | undefined>(
    () => window.sessionStorage.getItem("token") || undefined
  );

  function login() {
    const authToken = "12345abcde";
    setToken(authToken);
    window.sessionStorage.setItem("token", authToken);
  }

  function logOut() {
    window.sessionStorage.clear();
    setToken(undefined);
  }

  // React.useEffect(() => {
  //     if(!token){

  //     }
  // })

  return { token, logOut, login };
};

export default useSessionStorage;
