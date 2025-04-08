/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  // ganti jadi "media" kalau mau dark/light mode ngikutin setting os masing-masing user
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#dfbdf2", // aa3333 red
        secondary: "#BBF5AB", // ffff77 yellow BBF5AB
        tertiary: "#ffff77", // 55ffff cyan
        primarydark: "#ffff77", // ffa200 orange
        secondarydark: "#55ffff", // ff0095 hot pink
        tertiarydark: "#fff", // 0dff00 hijau neon
        dark: "#0f172a",
        darkmode: "#1e293b", // 1c1c22
      },
      screens: {
        "2xl": "1320px",
        xs: "480px",
        // lgxl: "1024px",
        // xltoxxl: "1280px",
        // "xs-to-sm": "560px",
        // "sm-to-md": "704px",
        // "md-to-lg": "896px",
      },
    },
  },
  plugins: [],
};
