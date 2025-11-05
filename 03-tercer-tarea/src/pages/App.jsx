import { useState } from "react";
import { Login } from "../components/Login";

export const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem("isLogged", "true");
  };

  return (
    <>
      <h1>¡Hola de nuevo {user}!</h1>
      <button>Logout</button>

      <Login onLogin={handleLogin} />
      {/* <Register /> */}
    </>
  );
};
