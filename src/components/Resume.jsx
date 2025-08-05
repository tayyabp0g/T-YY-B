import React from "react";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaUser, FaGraduationCap, FaLanguage, FaTools, FaListAlt, FaUserCheck
} from "react-icons/fa";
import myPic from "../assets/about-pic1.jpg"; // apni image ka path

export default function Resume() {
  return (
    <section
      id="resume"
      style={{
        background: "#181818",
        minHeight: "100vh",
        padding: "60px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="resume-container">
        {/* Left: Profile Card */}
        <div className="resume-profile">
          <div className="resume-profile-img-frame">
            <img
              src={myPic}
              alt="Muhammad Tayyab"
              className="resume-profile-img"
            />
          </div>
          <h2 className="resume-profile-name">
            Muhammad Tayyab
          </h2>
          <div className="resume-profile-title">
            Computer Science Student
          </div>
          <div style={{ width: "100%", marginBottom: 16 }}>
            <ContactRow icon={<FaEnvelope color="#e74c3c" />} label="muhammadtayyab3753@gmail.com" />
            <ContactRow icon={<FaPhone color="#e74c3c" />} label="0349-1885379" />
            <ContactRow icon={<FaMapMarkerAlt color="#e74c3c" />} label="Sargodha, Pakistan" />
            <ContactRow icon={<FaGithub color="#e74c3c" />} label="tayyabp0g" link="https://github.com/tayyabp0g" />
          </div>
        </div>

        {/* Right: Resume Content */}
        <div className="resume-content">
          {/* Main Resume */}
          <div>
            {/* Resume Header */}
            <div className="resume-header">
              Resume
            </div>
            {/* Profile */}
            <SectionTitle icon={<FaUser color="#e74c3c" />} title="Profile" />
            <p style={{ color: "#b0b6bb", marginBottom: 24 }}>
              I am a computer science student. For more details, you can check my CV or contact me.<br />
            </p>
            {/* Education */}
            <SectionTitle icon={<FaGraduationCap color="#e74c3c" />} title="Education" />
            <ul style={{ color: "#fff", marginBottom: 24, paddingLeft: 18 }}>
              <li>
                <b>BS in Computer Science</b> - University of Sargodha <br />
                <span style={{ color: "#b0b6bb", fontSize: 15 }}>09/2022 – 11/2026</span>
              </li>
            </ul>
            {/* Work Experience */}
            <SectionTitle icon={<FaListAlt color="#e74c3c" />} title="Work Experience" />
            <ul style={{ color: "#fff", marginBottom: 24, paddingLeft: 18 }}>
              <li>
                <b>SEO Executive</b> - Rank Divine <br />
                <span style={{ color: "#b0b6bb", fontSize: 15 }}>10/2024 – 03/2025</span>
              </li>
              <li>
                <b>Volunteer</b> - Sirat Al Mustaqeem Welfare Foundation (SMWF) <br />
                <span style={{ color: "#b0b6bb", fontSize: 15 }}>02/2022 – Present</span>
              </li>
            </ul>
          </div>
          {/* Side Resume */}
          <div>
            {/* Languages */}
            <SectionTitle icon={<FaLanguage color="#e74c3c" />} title="Languages" />
            <ul style={{ color: "#fff", marginBottom: 24, paddingLeft: 18 }}>
              <li>English - Good</li>
              <li>Urdu - Native</li>
            </ul>
            {/* Soft Skills */}
            <SectionTitle icon={<FaUserCheck color="#e74c3c" />} title="Soft Skills" />
            <ul style={{ color: "#fff", marginBottom: 24, paddingLeft: 18 }}>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Problem Solving</li>
              <li>Adaptability</li>
            </ul>
            {/* Technical Skills */}
            <SectionTitle icon={<FaTools color="#e74c3c" />} title="Technical Skills" />
            <ul style={{ color: "#fff", marginBottom: 24, paddingLeft: 18 }}>
              <li>HTML, CSS, JavaScript, React JS, Bootstrap, PHP, MySQL, C++</li>
              <li>Information Security, Networking</li>
              <li>Machine Learning (Basic)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          .resume-container {
            display: flex;
            flex-direction: row;
            gap: 40px;
            max-width: 1400px;
            width: 100%;
            margin: 0 auto;
            padding: 0 30px;
          }
          .resume-profile {
            background: #232323;
            border-radius: 32px;
            padding: 24px 32px;
            width: 370px;
            min-width: 240px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
            margin-bottom: 24px;
          }
          .resume-profile-img-frame {
            background: #181818;
            border: 6px solid #e74c3c;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 28px;
            overflow: hidden;
          }
          .resume-profile-img {
            width: 138px;
            height: 138px;
            object-fit: cover;
            filter: grayscale(100%);
            border-radius: 50%;
          }
          .resume-profile-name {
            color: #fff;
            font-weight: 700;
            font-size: 30px;
            margin-bottom: 10px;
            text-align: center;
          }
          .resume-profile-title {
            background: #111;
            color: #fff;
            border-radius: 10px;
            padding: 7px 20px;
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 28px;
            text-align: center;
          }
          .resume-content {
            flex: 1;
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 40px;
          }
          .resume-header {
            background: #e74c3c;
            color: #fff;
            border-radius: 0 0 24px 0;
            padding: 12px 38px;
            font-weight: 700;
            font-size: 32px;
            margin-bottom: 28px;
            width: fit-content;
            box-shadow: 0 4px 16px 0 rgba(0,0,0,0.10);
          }
          @media (max-width: 1100px) {
            .resume-container {
              flex-direction: column;
              align-items: center;
              gap: 24px;
              padding: 0 10px;
            }
            .resume-content {
              grid-template-columns: 1fr;
              gap: 24px;
              width: 100%;
            }
            .resume-profile {
              width: 100%;
              min-width: 0;
              margin-bottom: 0;
            }
          }
          @media (max-width: 700px) {
            .resume-container {
              flex-direction: column;
              align-items: center;
              gap: 16px;
              padding: 0 4vw;
            }
            .resume-profile {
              padding: 16px 8px;
              border-radius: 18px;
            }
            .resume-profile-img-frame {
              width: 90px;
              height: 90px;
              margin-bottom: 16px;
            }
            .resume-profile-img {
              width: 80px;
              height: 80px;
            }
            .resume-profile-name {
              font-size: 20px;
              margin-bottom: 6px;
            }
            .resume-profile-title {
              font-size: 13px;
              padding: 5px 10px;
              margin-bottom: 16px;
            }
            .resume-content {
              grid-template-columns: 1fr;
              gap: 16px;
              width: 100%;
            }
            .resume-header {
              font-size: 22px;
              padding: 8px 18px;
              border-radius: 0 0 12px 0;
            }
          }
        `}
      </style>
    </section>
  );
}

// ContactRow Component
function ContactRow({ icon, label, link }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
      <span style={{ marginRight: 12 }}>{icon}</span>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
          {label}
        </a>
      ) : (
        <span style={{ color: "#fff" }}>{label}</span>
      )}
    </div>
  );
}

// SectionTitle Component
function SectionTitle({ icon, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", color: "#e74c3c", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
      <span style={{ marginRight: 10 }}>{icon}</span>
      {title}
    </div>
  );
}