import { createContext, useState } from "react";

export let UserContext = createContext();

export default function UserContextprovider(props) {
  const [token, setToken] = useState(null);

  return (
    <UserContext.Provider value={{token,setToken}}>
        {props.children}
    </UserContext.Provider>
  );
}
