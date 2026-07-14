import {
  FaTachometerAlt,
  FaBoxOpen,
  FaWarehouse,
  FaUsers,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar({ user, logout }) {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col shadow-lg">
      {/* Logo */}
      <div className="bg-sky-600 h-16 flex items-center justify-center shadow">
        <h1 className="text-2xl font-bold tracking-wide">StockMS</h1>
      </div>

      {/* User Profile */}
      <div className="flex flex-col items-center py-6 border-b border-slate-700">
        <FaUserCircle className="text-6xl text-gray-300" />

        <h3 className="mt-3 text-lg font-semibold">{user?.name}</h3>

        <p className="text-sm text-green-400">● {user?.role}</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-6 py-3 transition
            ${
              isActive
                ? "bg-sky-600 text-white"
                : "text-gray-300 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <FaTachometerAlt />
          Dashboard12
        </NavLink>

        <NavLink
          to="/products"
          className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
        >
          <FaBoxOpen />
          Products
        </NavLink>

        <NavLink
          to="/stores"
          className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
        >
          <FaWarehouse />
          Stores
        </NavLink>

        <NavLink
          to="/users"
          className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
        >
          <FaUsers />
          Users
        </NavLink>

        <NavLink
          to="/reports"
          className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
        >
          <FaClipboardList />
          Reports
        </NavLink>

        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
        >
          <FaCog />
          Settings
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition py-3 rounded-md font-medium"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}
