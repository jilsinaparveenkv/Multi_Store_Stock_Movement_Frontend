import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav
      style={{
        padding: "15px",
        background: "#333",
        display: "flex",
        gap: "20px",
        color: "white",
      }}
    >
      <Link to="/dashboard" style={{ color: "white" }}>
        Dashboard
      </Link>

      <Link to="/products" style={{ color: "white" }}>
        Products
      </Link>

      <Link to="/stores" style={{ color: "white" }}>
        Stores
      </Link>

      <Link to="/stocks" style={{ color: "white" }}>
        Stocks
      </Link>

      {user?.role === "admin" && (
        <Link to="/transfer" style={{ color: "white" }}>
          Transfer
        </Link>
      )}

      <span style={{ marginLeft: "auto" }}>{user?.name}</span>

      <button onClick={logout}>Logout</button>
    </nav>
  );
}
