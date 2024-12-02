const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        customRed: "#9f2927",
        customRedHover: "#d62926",
        customYellow: "#f8f2db",
        customLightYellow: "rgba(248,242,219,1)", // Light yellow
        customYellow2: " rgba(242,232,192,1)", // Yellow
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      datatables: true,
    }),
    // ... other plugins
  ],
};
