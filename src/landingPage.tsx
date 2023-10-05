import AboutSection from "./components/about-section";
import HeroSection from "./components/hero-section";
import Services from "./components/services";
import Subscribe from "./components/subscribe";

const LandingPage = () => {
  return (
    <main className="max-w-7xl m-auto">
      {" "}
      <HeroSection />
      <Subscribe />
      <AboutSection />
      <Services />
    </main>
  );
};

export default LandingPage;
