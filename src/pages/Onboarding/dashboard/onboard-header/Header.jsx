// onboard-header/Header.jsx

import "./Header.css";
import { LuBell } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="dashboard-header">
      {/* Left Section: Page Title */}
      <div className="header-title" style={{ fontSize: "1.2em", fontWeight: "500" }} > Home </div>

      {/* Middle Section: Search Bar */}
      <div className="header-search">
        <div className="search-input-wrapper">
          {/* The CiSearch React Icon */}
          <CiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search results or recommendations"
            className="search-input"
          />
        </div>
      </div>

      {/* Right Section: Sync Time & Icons */}
      <div className="header-actions">
        <span className="sync-info">
          Last Sync: <br /> <b>Aug 15, 2025 - 1:03 PM</b>
        </span>
        <button className="action-button">
          <FiShoppingCart />
        </button>
        <button className="action-button">
          <LuBell />
        </button>
      </div>
    </header>
  );
};

export default Header;
