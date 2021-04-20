import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogIn: (email, password) => {}
});

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const logOutHandler = () => {
    setIsLoggedIn(false);
  };
  const logInHandler = () => {
    setIsLoggedIn(true);
  };
  return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogOut: logOutHandler, onLogIn: logInHandler }}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
