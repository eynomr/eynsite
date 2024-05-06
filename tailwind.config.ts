import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 


const colors = {
  neutral: {
    10: '#37352F',
    20: '#45423A',
    30: '#212226',
    40: '#2C2D33',
    50: '#7B7A78',
    60: '#6F7280',
    70: '#9195A6',
    80: '#B2B6CC',
    85: "#E7E7E4",
    90: '#F1F1EF',
    96: '#EFEFEF',
    100: '#FFFFFF',
  },
  green: {
    10: '#458262',
    'w0': '#458262'
  },
  red: {
    10: '#D34C47',
    'w0': '#FDEBEC'
  },
  blue: {
    10: '#3139FF',
  }
}
const spacing = {
  '0': '0px',
  "50": "2px",
  "100": "4px",
  "200": "8px",
  "300": "12px",
  "400": "16px",
  "500": "20px",
  "600": "24px",
  "800": "32px",
  "1200": "48px",
  "1400": "56px",
  "1600": "64px",
  "2000": "80px",
}



export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: colors,
    spacing: spacing,
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}