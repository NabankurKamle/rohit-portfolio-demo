module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxl: { min: "1500px" }, //  Large Screen
      // => @media (max-width: 1280px) { ... }

      xl: { min: "1280px" }, //  Large Screen
      // => @media (max-width: 1280px) { ... }

      lg: { min: "1000px" }, //  Desktop
      // => @media (min-width: 992px) { ... }

      md: { min: "800px" }, //  Tablet
      // => @media (min-width: 768px) { ... }

      sm: { min: "500px" }, //  Mobile Landscape
      // => @media (min-width: 480px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Helvetica: ["Helvetica", "cursive"],
        HelveticaBold: ["HelveticaBold", "cursive"],
        HelveticaLight: ["HelveticaLight", "cursive"],
        HelveticaItalic: ["HelveticaItalic", "cursive"],
        HelveticaBoldItalic: ["HelveticaBoldItalic", "cursive"],
        HelveticaRoundedBold: ["HelveticaRoundedBold", "cursive"],
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: `translateX(${-150 * 14}px)` },
        },
        slide: {
          from: {
            transform: "translateX(150px)",
            opacity: 0,
            filter: `blur(36px)`,
          },
          to: { transform: "translateX(0)", opacity: 1, filter: `blur(0)` },
        },
        showcontent: {
          from: {
            opacity: 0,
            transform: "translate(0, 100px)",
            filter: "blur(33px)",
          },
          to: { opacity: 1, transform: "translate(0, 0)", filter: "blur(0)" },
        },
        grayscale: {
          25: ".25",
          50: ".50",
          75: ".75",
        },
      },
    },
  },
  plugins: [],
};
