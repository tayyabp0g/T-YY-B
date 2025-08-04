import useTypewriter from "../hooks/useTypewriter";
import myPic from "../assets/your-image.jpg"; // apni image ka path

export default function HeroSection() {
  const name = useTypewriter("MUHAMMAD TAYYAB", 100);

  return (
    <div id="home" style={{ background: "#111", minHeight: "100vh" }}>
      <div className="container d-flex align-items-center justify-content-between" style={{ minHeight: "100vh" }}>
        {/* Left Side */}
        <div>
          <h4 style={{ color: "#e74c3c" }}>Hello, My Name Is</h4>
          <h1
            className="fw-bold"
            style={{ color: "#fff", fontSize: "4rem", letterSpacing: 2, minHeight: "4.5rem" }}
          >
            {name}
          </h1>
          <p style={{ color: "#b0b6bb", maxWidth: 500 }}>
            I am a BSCS student at the University of Sargodha. I am passionate about web development and love exploring new ideas and possibilities in the world of technology.
          </p>
          <a href="#contact" className="btn btn-danger mt-3 px-4 py-2 fw-bold">
            Contact me
          </a>
        </div>
        {/* Right Side */}
        <div className="d-none d-md-block">
          <div style={{
            background: "linear-gradient(135deg, #e74c3c 80%, transparent 100%)",
            width: 350,
            height: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            overflow: "hidden"
          }}>
            <img
              src={myPic}
              alt="Muhammad Tayyab"
              style={{
                width: 320,
                height: 380,
                objectFit: "cover",
                filter: "grayscale(100%)",
                border: "6px solid #111",
                borderRadius: 16
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}