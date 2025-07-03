import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx} ",  "./src/**/*.{html,css}"],
  
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        noto: ['"Noto Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [plugin()],
};
