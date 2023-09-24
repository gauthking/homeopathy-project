import { NavbarInfo } from "@/utils/constant";

/**
 * MainNavbar component renders the main navigation bar.
 *
 * @returns {JSX.Element} - Returns the JSX element representing the main navigation bar.
 */
const MainNavbar = () => {
  return (
    // Main navigation container with hidden class for responsive design.
    <div className="h-10 hidden w-full xl:px-4 items-center md:flex justify-between p-8">
      <div>
        {/* Logo and title */}
        <h1 className="flex text-3xl gap-1 font-semibold whitespace-nowrap capitalize">
          Joy <span className="text-primary">Homeo</span>
        </h1>
      </div>
      <nav className="space-x-8">
        {/* Render navigation links */}
        {NavbarInfo.map((item, index) => {
          return (
            // Navigation link with font style and route
            <a
              className="font-medium text-lg rounded-lg hover:bg-blue-400 hover:rounded-xl transition-all ease-in-out p-2"
              href={item.href}
              key={index}
            >
              {item.title}
            </a>
          );
        })}
      </nav>
      {/* Link to "contact us" with a CustomButton */}

      <a
        href="#footer"
        // CustomButton styles and properties
        className="bg-primary p-2 cursor-pointer hover:bg-primary/90 capitalize font-normal px-1.5 text-white text-lg  rounded leading-4"
      >
        contact us
      </a>
    </div>
  );
};

export default MainNavbar;
