import logo from '../assets/logo.jpg';

export default function Header() {
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

        {/* Menu Options */}
        <ul
          className="menu-list d-flex mb-0"
          style={{
            listStyle: "none",
            gap: "2.2rem",
            fontWeight: 700,
            letterSpacing: 1,
            alignItems: "center",
            margin: 0,
            transition: "all 0.3s",
            flexWrap: "wrap",
          }}
        >
          <li>
            <a
              href="#home"
              className="text-white text-uppercase text-decoration-none"
              style={{ letterSpacing: 1, fontSize: "1rem" }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white text-uppercase text-decoration-none"
              style={{ letterSpacing: 1, fontSize: "1rem" }}
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="text-white text-uppercase text-decoration-none"
              style={{ letterSpacing: 1, fontSize: "1rem" }}
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
            .menu-list {
              gap: 0.7rem !important;
              font-size: 13px !important;
              flex-wrap: wrap !important;
              justify-content: flex-end !important;
            }
            .menu-list li a {
              font-size: 0.95rem !important;
              padding: 6px 0;
              display: block;
              text-align: center;
            }
          }
          @media (max-width: 480px) {
            .menu-list {
              gap: 0.3rem !important;
              font-size: 11px !important;
            }
            .header-container {
              padding: 0 2px !important;
            }
          }
        `}
      </style>
    </header>
  );
}