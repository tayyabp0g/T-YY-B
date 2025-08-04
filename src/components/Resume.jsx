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
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 40,
          maxWidth: 1400,
        }}
      >
        {/* Left: Profile Card */}
        <div
          style={{
            background: "#232323",
            borderRadius: 32,
            padding: "16px 40px",
            width: 370,
            minWidth: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
          }}
        >
          <div
            style={{
              background: "#181818",
              border: "6px solid #e74c3c",
              borderRadius: "50%",
              width: 150,
              height: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 28,
              overflow: "hidden",
            }}
          >
            <img
              src={myPic}
              alt="Muhammad Tayyab"
              style={{
                width: 138,
                height: 138,
                objectFit: "cover",
                filter: "grayscale(100%)",
                borderRadius: "50%",
              }}
            />
          </div>
          <h2 style={{ color: "#fff", fontWeight: 700, fontSize: 30, marginBottom: 10, textAlign: "center" }}>
            Muhammad Tayyab
          </h2>
          <div
            style={{
              background: "#111",
              color: "#fff",
              borderRadius: 10,
              padding: "7px 20px",
              fontWeight: 500,
              fontSize: 16,
              marginBottom: 28,
              textAlign: "center"
            }}
          >
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
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 40,
          }}
        >
          {/* Main Resume */}
          <div>
            {/* Resume Header */}
            <div
              style={{
                background: "#e74c3c",
                color: "#fff",
                borderRadius: "0 0 24px 0",
                padding: "12px 38px",
                fontWeight: 700,
                fontSize: 32,
                marginBottom: 28,
                width: "fit-content",
                boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
              }}
            >
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