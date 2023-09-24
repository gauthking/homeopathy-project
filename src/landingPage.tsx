import AboutSection from "./components/about-section";
import HeroSection from "./components/hero-section";
import Subscribe from "./components/subscribe";

const LandingPage = () => {
  return (
    <>
      {" "}
      <HeroSection />
      <Subscribe />
      <AboutSection />
    </>
  );
};

export default LandingPage;
