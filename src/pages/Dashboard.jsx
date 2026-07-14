import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">StockMS</h2>

        <div className="user-info">
          <div className="avatar">{user?.name?.charAt(0).toUpperCase()}</div>

          <h4>{user?.name}</h4>
          <p>{user?.role}</p>
        </div>

        <ul className="menu">
          <li className="active"> Dashboard</li>
          <li> Products</li>
          <li> Stores</li>
          <li> Inventory</li>
          <li> Users</li>
          <li> Settings</li>
        </ul>

        <button className="btn btn-danger logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="topbar">
          <h2>Dashboard</h2>
          <span>Welcome, {user?.name}</span>
        </header>

        <div className="cards">
          <div className="card blue">
            <h3>Total Products</h3>
            <h1>120</h1>
          </div>

          <div className="card green">
            <h3>Total Stores</h3>
            <h1>08</h1>
          </div>

          <div className="card red">
            <h3>Out of Stock</h3>
            <h1>05</h1>
          </div>

          <div className="card gray">
            <h3>Total Users</h3>
            <h1>15</h1>
          </div>
        </div>

        <div className="card mt-2">
          <h3>Welcome to the MERN Stock Management Dashboard</h3>
          <p>
            Here you can manage products, stores, stock, users and generate
            reports.
          </p>
        </div>
      </div>
    </div>
  );
}
