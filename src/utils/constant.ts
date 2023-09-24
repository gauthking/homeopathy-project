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
    // Define the title of the "History" navigation item.
    title: "History",

    // Specify the URL for the "History" page.
    href: "/history",
  },

  {
    // Define the title of the "About us" navigation item.
    title: "About us",

    // Specify the URL for the "About us" page.
    href: "/#about",
  },
];
