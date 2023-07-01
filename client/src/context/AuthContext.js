import { createContext, useEffect, useState } from "react";

export const AuthContext =  createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [rememberMe, setRememberMe] = useState(
    JSON.parse(localStorage.getItem("rememberMe")) || false
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Joe",
      profilePic:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    });
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
    localStorage.setItem("rememberMe", JSON.stringify(rememberMe));
  }, [currentUser, rememberMe]);

  return (
    <AuthContext.Provider value={{ currentUser, login, rememberMe, handleCheckboxChange }}>
      {children}
    </AuthContext.Provider>
  );
};