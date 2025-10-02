// onboard-sidebar/Sidebar.jsx
import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BsLightningFill } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";

const Sidebar = () => {
  // Dummy navigation data
  const navItems = [
    { name: "Home", icon: <AiOutlineHome />, path: "/", active: true },
    { name: "Optimize", icon: <BsLightningFill />, path: "/optimize" },
    { name: "Biomarkers", icon: <AiOutlineLineChart />, path: "/biomarkers" },
    { name: "Profile", icon: <FiUser />, path: "/profile" },
  ];

  return (
    // The 'sidebar' class is defined with position: fixed in DashLayout.css
    <aside className="sidebar">
      <div className="sidebar-inner">
        {/* Logo Section */}
        <div className="sidebar-logo">ADEN</div>

        {/* Main Navigation */}
        <nav className="sidebar-nav-main mt-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`sidebar-link ${item.active ? "active" : ""}`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Links */}
      <div className="sidebar-bottom">
        <a href="#" className="sidebar-link">
          <span className="sidebar-icon">
            <IoSettingsOutline />
          </span>{" "}
          Settings
        </a>
        <a href="#" className="sidebar-link">
          <span className="sidebar-icon">
            <PiSignOut />
          </span>{" "}
          Sign Out
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
