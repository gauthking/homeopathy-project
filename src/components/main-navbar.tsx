import { NavbarInfo } from "@/utils/constant";
import { Link } from "react-router-dom";
import CustomButton from "@/components/common/custom-btn";

/**
 * MainNavbar component renders the main navigation bar.
 *
 * @returns {JSX.Element} - Returns the JSX element representing the main navigation bar.
 */
const MainNavbar = () => {
  return (
    // Main navigation container with hidden class for responsive design.
    <div className="h-10 hidden w-full xl:px-4 items-center md:flex justify-between">
      <div>
        {/* Logo and title */}
        <h1 className="flex text-xl gap-1 font-semibold whitespace-nowrap capitalize">
          Joy <span className="text-primary">Homeo</span>
        </h1>
      </div>
      <nav className="space-x-4">
        {/* Render navigation links */}
        {NavbarInfo.map((item, index) => {
          return (
            // Navigation link with font style and route
            <a className="font-medium text-sm" href={item.href} key={index}>
              {item.title}
            </a>
          );
        })}
      </nav>
      {/* Link to "contact us" with a CustomButton */}
      <Link to={"/#"}>
        <CustomButton
          // CustomButton styles and properties
          className="bg-primary py-1 hover:bg-primary/90 capitalize font-normal px-1.5 text-white text-xs rounded leading-4"
        >
          contact us
        </CustomButton>
      </Link>
    </div>
  );
};

export default MainNavbar;
