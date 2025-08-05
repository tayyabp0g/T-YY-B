import useTypewriter from "../hooks/useTypewriter";
import myPic from "../assets/your-image.jpg"; // apni image ka path

export default function HeroSection() {
  const name = useTypewriter("MUHAMMAD TAYYAB", 100);

  return (
    <div id="home" style={{ background: "#111", minHeight: "100vh" }}>
      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-left">
          <h4 style={{ color: "#e74c3c" }}>Hello, My Name Is</h4>
          <h1
            className="fw-bold"
            style={{
              color: "#fff",
              fontSize: "4rem",
              letterSpacing: 2,
              minHeight: "4.5rem",
              lineHeight: 1.1,
            }}
          >
            {name}
          </h1>
          <p style={{ color: "#b0b6bb", maxWidth: 500 }}>
            I am a BSCS student at the University of Sargodha. I am passionate about web development and love exploring new ideas and possibilities in the world of technology.
          </p>
          <a href="#resume" className="btn btn-danger mt-3 px-4 py-2 fw-bold">
            Contact me
          </a>
        </div>
        {/* Right Side */}
        <div className="hero-right">
          <div className="hero-img-frame">
            <img
              src={myPic}
              alt="Muhammad Tayyab"
              className="hero-img"
            />
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          .hero-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 100vh;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 30px;
            gap: 40px;
          }
          .hero-left {
            flex: 1;
            min-width: 260px;
          }
          .hero-right {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 260px;
          }
          .hero-img-frame {
            background: linear-gradient(135deg, #e74c3c 80%, transparent 100%);
            width: 350px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
          }
          .hero-img {
            width: 320px;
            height: 380px;
            object-fit: cover;
            filter: grayscale(100%);
            border: 6px solid #111;
            border-radius: 16px;
          }

          /* Tablet */
          @media (max-width: 900px) {
            .hero-container {
              flex-direction: column-reverse;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              gap: 30px;
              padding: 40px 10px 10px 10px;
            }
            .hero-left, .hero-right {
              width: 100%;
              min-width: 0;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .hero-img-frame {
              width: 270px;
              height: 320px;
            }
            .hero-img {
              width: 240px;
              height: 290px;
            }
            .fw-bold {
              font-size: 2.2rem !important;
            }
          }

          /* Mobile */
          @media (max-width: 600px) {
            .hero-container {
              flex-direction: column-reverse;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              gap: 18px;
              padding: 30px 4vw 10px 4vw;
            }
            .hero-left, .hero-right {
              width: 100%;
              min-width: 0;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .hero-img-frame {
              width: 180px;
              height: 200px;
            }
            .hero-img {
              width: 150px;
              height: 170px;
            }
            .fw-bold {
              font-size: 1.3rem !important;
            }
            .btn {
              font-size: 15px !important;
              padding: 8px 18px !important;
            }
          }
        `}
      </style>
    </div>
  );
}