import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
  bodyFontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
  overrideStyles: () => ({
    "th:first-child, td:first-child": {
      paddingLeft: "0.5rem",
    },
    "th:last-child, td:last-child": {
      paddingRight: "0.5rem",
    },
  }),
})

export default typography
