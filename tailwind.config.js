module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        awesomegreen: "#1e3932",
        pretblack: "#372F31",
      },
    },
  },

  variants: {
    extend: {},
    animation: ["group-hover"],
  },
  plugins: [],
};
