import "./DashLayout.css";
import Sidebar from "./onboard-sidebar/Sidebar";
import Header from "./onboard-header/Header";
import DashPages from "./onboard-pages/DashPages";

export default function DashLayout() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
             <DashPages />
        </div>
      </div>
    </div>
  );
}
