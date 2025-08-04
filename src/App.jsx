import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutMe from './components/AboutMe.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Header />
      {/* Header ki height jitni padding (60px + border) */}
      <div style={{ paddingTop: 80 }}>
        <HeroSection />
        <AboutMe />
        <Resume />
        <Footer />
      </div>
    </div>
  );
}

export default App;