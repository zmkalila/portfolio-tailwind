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
        primary: "#38bdf8", // db2777
        secondary: "#64748b",
        dark: "#0f172a",
        darkmode: "#1e293b", // 1c1c22
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
