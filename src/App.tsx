import MainNavbar from "@/components/main-navbar";
import PageContainer from "@/components/page-container";
import UseUserDataWrapper from "@/hooks/UseUserDataWrapper";
import MobileNavbar from "@/components/mobile-navbar";
import FooterSection from "./components/footer";
import { Outlet } from "react-router";

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
          <Outlet />
        </PageContainer>
      </main>
      {/** Footer section */}
      <FooterSection />
    </UseUserDataWrapper>
  );
}

export default App;
