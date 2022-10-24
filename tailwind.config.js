/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#542BDB",
          secondary: "#9661B7",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#1E2034",
          success: "#1F9E60",
          error: "#F27469",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
