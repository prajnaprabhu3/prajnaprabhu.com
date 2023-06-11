/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // myColor: "#FE9FA1",
        myColor: "#FF869C",
      },
      fontFamily: {
        // sans: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
