import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #181818 70%, #e74c3c 100%)",
        color: "#fff",
        padding: "18px 0 8px 0",
        marginTop: 40,
        boxShadow: "0 -2px 16px 0 rgba(0,0,0,0.12)",
      }}
    >
      <div
        className="footer-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 20, letterSpacing: 1, marginBottom: 2 }}>
          Muhammad Tayyab
        </div>
        <div className="footer-icons" style={{ display: "flex", gap: 18, fontSize: 22, marginBottom: 2 }}>
          <a
            href="https://github.com/tayyabp0g"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", transition: "color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#e74c3c")}
            onMouseOut={e => (e.currentTarget.style.color = "#fff")}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:muhammadtayyab3753@gmail.com"
            style={{ color: "#fff", transition: "color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#e74c3c")}
            onMouseOut={e => (e.currentTarget.style.color = "#fff")}
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-tayyab-12b816279"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", transition: "color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#e74c3c")}
            onMouseOut={e => (e.currentTarget.style.color = "#fff")}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <div style={{ color: "#fff", opacity: 0.7, fontSize: 13, marginTop: 2 }}>
          &copy; {new Date().getFullYear()} Muhammad Tayyab. All Rights Reserved.
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 600px) {
            .footer-container {
              padding: 0 8px;
            }
            .footer-icons {
              gap: 12px !important;
              font-size: 18px !important;
            }
            footer {
              padding: 12px 0 6px 0 !important;
            }
          }
        `}
      </style>
    </footer>
  );
}