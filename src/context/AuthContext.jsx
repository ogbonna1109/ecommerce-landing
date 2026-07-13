import { createContext, useState, useContext, useEffect } from "react";
// we create context
const AuthContext = createContext();

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);

useEffect (() => {

  const savedUser = localStorage.getItem("user");

  if(savedUser) {
    const userData = JSON.parse(savedUser);
    setUser(userData);
  }
},[])

const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
};

const logout =() => {
    setUser(null);
    localStorage.removeItem("user");
};

 const value = {
    user,
    login,
    logout
 }

 return(
    <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
 );

}
export default AuthProvider


export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
