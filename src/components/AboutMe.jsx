import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaPencilRuler, FaCode, FaLaptop, FaUserCheck, FaHeadset, FaFlag } from "react-icons/fa";
import { SiMysql, SiCplusplus } from "react-icons/si";
import myPic from "../assets/about-pic.jpg"; // apni image ka path

export default function AboutMe() {
  return (
    <section
      id="about"
      style={{
        background: "#181818",
        minHeight: "100vh",
        padding: "60px 0 0 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 48,
          maxWidth: 1300,
        }}
      >
        {/* Left: Image with big red frame */}
        <div
          style={{
            background: "#111",
            borderRadius: 28,
            overflow: "hidden",
            width: 420,
            height: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 320,
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
            border: "8px solid #e74c3c",
            marginLeft: 0,
          }}
        >
          <img
            src={myPic}
            alt="Muhammad Tayyab"
            style={{
              width: 400,
              height: 500,
              objectFit: "cover",
              filter: "grayscale(100%)",
              borderRadius: 18,
              background: "#111"
            }}
          />
        </div>
        {/* Right: Content */}
        <div style={{
          flex: 1,
          maxWidth: 800,
          marginLeft: "auto",
        }}>
          <div className="mb-2" style={{ color: "#e74c3c", fontWeight: 600, fontSize: 20 }}>
            <span style={{ fontSize: 22 }}>▸</span> About me
          </div>
          <h2 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "2.8rem" }}>
            Who Am I
          </h2>
          <p style={{ color: "#b0b6bb", fontSize: 18, marginBottom: 24 }}>
            My name is <b>Muhammad Tayyab</b>, and I am a passionate frontend web developer. I am currently a BSCS student at the University of Sargodha. I love web development and always enjoy exploring new ideas and possibilities in the world of technology.<br /><br />
            My technical skills include proficiency in <b>HTML, CSS, JavaScript, React JS, Bootstrap, PHP, MySQL, and C++</b>. I am always learning new tools and frameworks to enhance my skills and deliver modern solutions.
          </p>
          {/* Skills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "flex-start",
              marginBottom: 24,
            }}
          >
            <SkillCard icon={<FaHtml5 color="#e44d26" size={28} />} label="HTML5" />
            <SkillCard icon={<FaCss3Alt color="#1572b6" size={28} />} label="CSS3" />
            <SkillCard icon={<FaJs color="#f7df1e" size={28} />} label="JavaScript" />
            <SkillCard icon={<FaReact color="#61dafb" size={28} />} label="React JS" />
            <SkillCard icon={<FaBootstrap color="#7952b3" size={28} />} label="Bootstrap" />
            <SkillCard icon={<FaPhp color="#8993be" size={28} />} label="PHP" />
            <SkillCard icon={<SiMysql color="#00758f" size={28} />} label="MySQL" />
            <SkillCard icon={<SiCplusplus color="#00599c" size={28} />} label="C++" />
          </div>
          {/* Download CV Button */}
          <div style={{ textAlign: "left", marginBottom: 40 }}>
            <a
              href="/cv.pdf"
              download
              className="btn btn-danger fw-bold px-4 py-2"
              style={{ fontSize: 18, minWidth: 200 }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* My Services Section */}
      <div
        className="container"
        style={{
          marginTop: 60,
          maxWidth: 1300,
        }}
      >
        <div className="mb-2" style={{ color: "#e74c3c", fontWeight: 600, fontSize: 20 }}>
          <span style={{ fontSize: 22 }}>▸</span> My Services
        </div>
        <h2 className="fw-bold mb-4" style={{ color: "#fff", fontSize: "2.2rem" }}>
          What Can I Do
        </h2>
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            justifyContent: "center",
          }}
        >
          <ServiceCard
            icon={<FaPencilRuler size={32} color="#e74c3c" />}
            title="Creative Design"
            desc="Leveraging artistic elements and aesthetic principles to craft visually appealing and engaging user experiences."
          />
          <ServiceCard
            icon={<FaCode size={32} color="#e74c3c" />}
            title="Clean Code"
            desc="Writing code that is well-structured, readable, and maintainable. It involves following coding best practices."
          />
          <ServiceCard
            icon={<FaLaptop size={32} color="#e74c3c" />}
            title="User Interface"
            desc="Creating intuitive and user-friendly designs that prioritize usability, accessibility, and a seamless user experience."
          />
          <ServiceCard
            icon={<FaUserCheck size={32} color="#e74c3c" />}
            title="User Experience"
            desc="Understanding user behaviors, needs, and preferences to create interfaces that are intuitive, efficient, and enjoyable to use."
          />
          <ServiceCard
            icon={<FaHeadset size={32} color="#e74c3c" />}
            title="Fast Support"
            desc="Addressing and resolving user-reported issues or inquiries related to the website or application."
          />
          <ServiceCard
            icon={<FaFlag size={32} color="#e74c3c" />}
            title="Branding"
            desc="Creating consistent and cohesive brand experiences through the use of logos, color schemes, typography, and other branding assets."
          />
        </div>
      </div>
      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 1100px) {
            .services-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (max-width: 700px) {
            .services-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
}

// SkillCard Component
function SkillCard({ icon, label }) {
  return (
    <div
      style={{
        background: "#232323",
        borderRadius: 10,
        padding: "10px 18px",
        color: "#fff",
        fontWeight: 500,
        fontSize: 16,
        minWidth: 150,
        display: "flex",
        alignItems: "center",
        gap: 8,
        justifyContent: "center",
      }}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

// ServiceCard Component
function ServiceCard({ icon, title, desc }) {
  return (
    <div
      style={{
        background: "#232323",
        borderRadius: 16,
        padding: "28px 24px",
        minWidth: 260,
        maxWidth: 320,
        color: "#fff",
        boxShadow: "0 4px 16px 0 rgba(0,0,0,0.18)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
      }}
    >
      <div style={{ marginBottom: 16 }}>{icon}</div>
      <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>{title}</div>
      <div style={{ color: "#b0b6bb", fontSize: 15 }}>{desc}</div>
    </div>
  );
}