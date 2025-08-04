import logo from '../assets/logo.jpg';

export default function Header() {
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

        {/* Menu Options */}
        <ul
          className="d-flex mb-0"
          style={{
            listStyle: "none",
            gap: "2.5rem",
            fontWeight: 700,
            letterSpacing: 1,
            alignItems: "center",
            margin: 0,
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
    </header>
  );
}