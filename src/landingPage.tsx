import AboutSection from "./components/about-section";
import HeroSection from "./components/hero-section";
import Services from "./components/services";
import Subscribe from "./components/subscribe";

const LandingPage = () => {
  return (
    <>
      {" "}
      <HeroSection />
      <Subscribe />
      <AboutSection />
      <Services />
    </>
  );
};

export default LandingPage;
