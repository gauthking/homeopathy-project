import React from "react";
import { CreateUserDataContext } from "@/hooks/UseUserDataWrapper";
import CustomButton from "@/components/common/custom-btn";
import CompleteDrawer from "@/components/common/drawer";
import { Icons } from "@/components/icons";
import PageContainer from "@/components/page-container";
import { NavbarInfo } from "@/utils/constant";
import { Link } from "react-router-dom";

/**
 * MobileNavbar component represents the mobile version of the navigation bar.
 *
 * @returns {React.Element} Returns a JSX element representing the mobile navigation bar.
 */
const MobileNavbar = () => {
  // Access user data context using useContext.
  const { setOpen, open } = React.useContext(CreateUserDataContext);

  /**
   * Toggles the mobile navigation drawer open or closed.
   *
   * @param {boolean} newState - The new state of the mobile navigation drawer.
   */
  const toggleMobileDrawer = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <div className="flex md:hidden py-2 justify-between">
      <div>
        <h1 className="flex text-xl gap-1 font-semibold whitespace-nowrap capitalize">
          Harmony <span className="text-primary">Heal</span>
        </h1>
      </div>
      {/* Render CompleteDrawer for mobile navigation */}
      <CompleteDrawer
        isOpen={open}
        onClose={() => toggleMobileDrawer(false)}
        position=""
      >
        <PageContainer className="grid overflow-hidden min-h-screen max-h-screen h-full place-items-center grid-cols-1">
          <nav className="flex flex-col items-center space-y-4">
            {/* Map over NavbarInfo to render navigation links */}
            {NavbarInfo.map((item, index) => {
              return (
                <Link
                  className="font-medium text-sm"
                  to={item.href}
                  key={index}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </PageContainer>
      </CompleteDrawer>
      {/* Render custom button with hamburger icon */}
      <CustomButton
        className="text-xl"
        onClick={() => toggleMobileDrawer(!open)}
      >
        <Icons.Hamburger />
      </CustomButton>
    </div>
  );
};

export default MobileNavbar;
