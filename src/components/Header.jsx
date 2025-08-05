import React, { useState, useEffect } from "react";
import logo from '../assets/logo.jpg';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on link click (mobile)
  const handleMenuClick = () => setOpen(false);

  return (
    <header
      style={{
        background: "#000",
        borderBottom: "2px solid #e74c3c",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        minHeight: 56,
      }}
    >
      <div
        className="header-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          height: 56,
        }}
      >
        {/* Logo in Red Circle */}
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "2.5px solid #e74c3c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#111",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: 28,
              height: 28,
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
            zIndex: 3001,
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
            gap: "2.2rem",
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
              onClick={handleMenuClick}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white text-uppercase text-decoration-none"
              style={{ letterSpacing: 1 }}
              onClick={handleMenuClick}
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="text-white text-uppercase text-decoration-none"
              style={{ letterSpacing: 1 }}
              onClick={handleMenuClick}
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
              padding: 0 8px !important;
            }
            .menu-list {
              gap: 1.1rem !important;
              font-size: 15px !important;
            }
          }
          @media (max-width: 700px) {
            .menu-icon {
              display: flex !important;
            }
            .menu-list {
              position: fixed;
              top: 56px;
              left: 0;
              right: 0;
              background: #111;
              flex-direction: column;
              width: 100vw;
              align-items: flex-start !important;
              padding: 18px 0 18px 24px;
              gap: 1.2rem !important;
              font-size: 17px !important;
              display: none;
              z-index: 3000;
              box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
              border-bottom-left-radius: 18px;
              border-bottom-right-radius: 18px;
            }
            .menu-list.open {
              display: flex !important;
            }
            .header-container {
              height: 56px !important;
            }
            .menu-list li a {
              font-size: 1.1rem !important;
              padding: 8px 0;
              display: block;
              width: 100%;
            }
          }
        `}
      </style>
    </header>
  );
}