/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4200FF",
        border: "4200FF",
        destructive: "#f43f5e",
      },
      backgroundImage: {
        pattern: "url('/save.gif')",
      },
    },
  },
};

export const plugins = [import("tailwindcss-animate")];
