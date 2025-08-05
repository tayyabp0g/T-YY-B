import React, { useState } from "react";
import logo from '../assets/logo.jpg';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        background: "#000",
        borderBottom: "2px solid #fff1f1",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        minHeight: 60,
      }}
    >
      <div
        className="header-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 30px",
          height: 60,
        }}
      >
        {/* Logo in Red Circle */}
        <div>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="menu-icon"
          style={{
            display: "none",
            flexDirection: "column",
            cursor: "pointer",
            marginLeft: "auto",
          }}
          onClick={() => setOpen(!open)}
        >
          <span style={{ width: 28, height: 3, background: "#fff", margin: "4px 0", borderRadius: 2 }}></span>
          <span style={{ width: 28, height: 3, background: "#fff", margin: "4px 0", borderRadius: 2 }}></span>
          <span style={{ width: 28, height: 3, background: "#fff", margin: "4px 0", borderRadius: 2 }}></span>
        </div>

        {/* Menu Options */}
        <ul
          className={`menu-list d-flex mb-0 ${open ? "open" : ""}`}
          style={{
            listStyle: "none",
            gap: "2.5rem",
            fontWeight: 700,
            letterSpacing: 1,
            alignItems: "center",
            margin: 0,
            transition: "all 0.3s",
          }}
        >
          <li>
            <a
              href="#home"
              className="text-white text-uppercase text-decoration-none"
              style={{ letterSpacing: 1 }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white text-uppercase text-decoration-none"
              style={{ letterSpacing: 1 }}
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="text-white text-uppercase text-decoration-none"
              style={{ letterSpacing: 1 }}
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 900px) {
            .header-container {
              padding: 0 10px !important;
            }
            .menu-list {
              gap: 1.2rem !important;
              font-size: 15px !important;
            }
          }
          @media (max-width: 700px) {
            .menu-icon {
              display: flex !important;
            }
            .menu-list {
              position: absolute;
              top: 60px;
              right: 0;
              background: #111;
              flex-direction: column;
              width: 100vw;
              align-items: flex-start !important;
              padding: 20px 0 20px 30px;
              gap: 1.5rem !important;
              font-size: 17px !important;
              display: none;
              z-index: 2000;
              box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
            }
            .menu-list.open {
              display: flex !important;
            }
          }
        `}
      </style>
    </header>
  );
}