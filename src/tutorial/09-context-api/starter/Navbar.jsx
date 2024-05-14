import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: "bob" });
  };
  return (
    <nav className="navbar">
      <h5>CONTEX API</h5>
      <NavLinks user={user} logout={logout} login={login} />
    </nav>
  );
};

export default Navbar;
