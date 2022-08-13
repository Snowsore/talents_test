module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        customer: "160px 1fr 100px 120px 100px 120px 130px 120px 60px",
      },
      colors: {
        blue: "#465ED8",
        green: "#209355",
        black: "#4A565A",
        gray: "#ABB6BA",
        "light-gray": "#E5E5E5",
      },
      fontFamily: {
        yahei: ["Microsoft YaHei"],
        number: ["Alte DIN 1451 Mittelschrift"],
      },
    },
    fontSize: {
      sm: ["12px", "16px"],
      base: ["13px", "17px"],
      lg: ["14px", "18px"],
    },
  },
  plugins: [],
};
