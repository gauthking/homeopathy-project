import MainNavbar from "@/components/main-navbar";
import PageContainer from "@/components/page-container";
import UseUserDataWrapper from "@/hooks/UseUserDataWrapper";
import MobileNavbar from "@/components/mobile-navbar";
import HeroSection from "@/components/hero-section";
import FooterSection from "./components/footer";

function App() {
  return (
    <UseUserDataWrapper>
      <PageContainer>
        <MainNavbar />
        <MobileNavbar />
      </PageContainer>
      {/**
       *
       * container
       */}
      <main className="min-h-screen flex justify-center">
        <PageContainer>
          <HeroSection />
        </PageContainer>
      </main>
      {/** Footer section */}
      <FooterSection />
    </UseUserDataWrapper>
  );
}

export default App;
