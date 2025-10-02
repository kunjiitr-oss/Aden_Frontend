import React from "react";
import "./DashPages.css";
import { FiInfo } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { FaHeartbeat, FaBurn, FaLungs, FaCogs } from 'react-icons/fa';


const DashPages = () => {
  return (
    <div className="dashpages">
      {/* Greeting */}
      <h2 className="greeting">Good Afternoon, Taylor</h2>

      {/* Main Wrapper (Summary + Metrics left, Upcoming right) */}
      <div className="summary-metrics-wrapper">
        <div className="left-section">
          {/* Health Summary */}
          <section className="health-summary">
             <h3 className="head-text">
              Health Summary
            </h3>
            <div className="summary-cards">
              <div className="health-card">
                <h4 className="card-head">Primary Goal</h4>
                <p className="bold-text">Weight Management</p>
                <span className="link-text">Update Goal</span>
              </div>

              <div className="health-card">
                <h4 className="card-head">Biological Age</h4>
                <p className="big-text">32</p>
                <small>4 years lower than chronological age</small>
                <span className="link-text">See how to improve</span>
              </div>

              <div className="health-card">
                <h4 className="card-head">Biomarker Overview</h4>
                <p>Normal: <b>84</b> Biomarkers</p>
                <p className="red-text">Out of Range: <b>6</b> Biomarkers</p>
                <span className="link-text">See more</span>
              </div>
            </div>
          </section>

      {/* System Metrics Section */}
      <section className="system-metrics-section">
        <h3 className="system-metrics-heading">
          System Metrics <FiInfo className="info-icon" />
        </h3>
        <div className="metrics-grid">
          {/* Cardiovascular */}
          <div className="metric-card">
            <div className="metric-header">
              <h4>Cardiovascular</h4>
              <FaHeartbeat className="metric-icon cardiovascular-icon" />
            </div>
             <div className="count-system">
               <div className="metric-value">62</div>
            <span className="status fair">Fair</span>
             </div>
          </div>

          {/* Metabolic */}
          <div className="metric-card">
            <div className="metric-header">
              <h4>Metabolic</h4>
              <FaBurn className="metric-icon metabolic-icon" />
            </div>
             <div className="count-system">
              <div className="metric-value">72</div>
            <span className="status fair">Fair</span>
             </div>
          </div>

          {/* Respiratory */}
          <div className="metric-card">
            <div className="metric-header">
              <h4>Respiratory</h4>
              <FaLungs className="metric-icon respiratory-icon" />
            </div>
              <div className="count-system">
                <div className="metric-value">82</div>
            <span className="status fair">Fair</span>
              </div>
          </div>

          {/* Nervous */}
          <div className="metric-card">
            <div className="metric-header">
              <h4>Nervous</h4>
              <FaCogs className="metric-icon nervous-icon" />
            </div>
            <div className="count-system">
               <div className="metric-value">85</div>
            <span className="status fair">Fair</span>
            </div>
          </div>
        </div>
        <button className="see-more-btn">See 5 more</button>
      </section>
        </div>

        {/* Upcoming Card */}
        <div className="upcoming-card">
          <h4 className="head-text">Upcoming</h4>
          <div className="upcoming-section">
            <p className="title">Scheduled:</p> 
             <div className="d-flex justify-content-between align-items-center">
               <p style={{fontSize:"12px"}}>DEXA Scan<br /><b style={{fontSize:"15px"}}>Aug 1st, 2026</b></p>
            <button className="outline-btn">View Details</button>
             </div>
          </div>

          <div className="upcoming-section">
            <p className="title">To-Do:</p>
             <div className="d-flex justify-content-between align-items-center">
               <p style={{fontSize:"12px"}}>Next recommended blood draw:<br /><b style={{fontSize:"15px"}}>Feb 1st, 2026</b></p>
            <button className="outline-btn">Schedule Now</button>
             </div>
          </div>

          <div className="upcoming-section">
            <p className="title">Completed:</p>
             <div className="d-flex justify-content-between align-items-center">
              <p style={{fontSize:"12px"}}>Blood draw: <br /> <b style={{fontSize:"15px"}}>Aug 1st, 2025</b></p>
            <button className="outline-btn">See Results</button>
             </div>
          </div>
        </div>
      </div>

      {/* Total Health */}
      <section className="total-health">
        <div className="total-header">
          <h3 className="head-text">Total Health<FiInfo className="info-icon" /></h3>
          <button className="outline-btn">View all</button>
        </div>

        <div className="health-sections">
          {/* Lifestyle */}
          <div className="health-col">
            <h4>Lifestyle</h4>
            <div className="health-card">
              <p className="category">LIFESTYLE</p>
              <h5>HIIT</h5>
              <small>2x per week, 4–6 intervals, 1–2 min each at high intensity.</small>
            </div>
            <div className="health-card">
              <p className="category">LIFESTYLE</p>
              <h5>Improve Sleep</h5>
              <small>2x per week, 4–6 intervals, 1–2 min each at high intensity.</small>
            </div>
          </div>

          {/* Supplements */}
          <div className="health-col">
            <h4>Supplements</h4>
            <div className="health-card">
              <p className="category">SUPPLEMENT</p>
              <h5>Omega-3</h5>
              <small>EPA/DHA 2–3 grams per day</small>
            </div>
            <div className="health-card">
              <p className="category">SUPPLEMENT</p>
              <h5>Curcumin</h5>
              <small>500–1000 mg per day</small>
            </div>
          </div>

          {/* Nutrition */}
          <div className="health-col">
            <h4>Nutrition</h4>
            <div className="health-card">
              <p className="category">NUTRITION</p>
              <h5>Reduce Saturated Fat</h5>
              <small>Reduce to less than 7% of total calories.</small>
            </div>
            <div className="health-card">
              <p className="category">NUTRITION</p>
              <h5>Reduce Alcohol Consumption</h5>
              <small>Drink less than two alcoholic drinks per week.</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashPages;
