// Import the necessary type definition for navigation items from the "../types" module.
import { INAV_INFO } from "@/types";

// Define an array of navigation items using the INAV_INFO type.
export const NavbarInfo: INAV_INFO[] = [
  {
    // Define the title of the first navigation item.
    title: "Home",

    // Specify the URL for the "Home" page.
    href: "/",
  },
  {
    // Define the title of the "Contact" navigation item.
    title: "Contact",

    // Specify the URL for the "Contact" page.
    href: "/contact",
  },
  {
    // Define the title of the "Service" navigation item.
    title: "Service",

    // Specify the URL for the "Service" page.
    href: "/services",
  },
  {
    // Define the title of the "Doctors" navigation item.
    title: "Doctors",

    // Specify the URL for the "Doctors" page.
    href: "/doctors",
  },
  {
    // Define the title of the "About us" navigation item.
    title: "About us",

    // Specify the URL for the "About us" page.
    href: "/about-us",
  },
];
