import MainNavbar from "@/components/main-navbar";
import PageContainer from "./components/page-container";
import UseUserDataWrapper from "./hooks/UseUserDataWrapper";
import MobileNavbar from "./components/mobile-navbar";

function App() {
  return (
    <UseUserDataWrapper>
      <div className="min-h-screen flex justify-center">
        <PageContainer className="min-h-screen">
          <MainNavbar />
          <MobileNavbar />
        </PageContainer>
      </div>
    </UseUserDataWrapper>
  );
}

export default App;
