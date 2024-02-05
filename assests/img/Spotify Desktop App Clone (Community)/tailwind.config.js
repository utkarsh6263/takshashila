/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        yellowgreen: "#6cc04a",
        white: "#fff",
        darkgray: "#b3b3b3",
        gray: {
          "100": "#282828",
          "200": "#181818",
        },
        forestgreen: "#1db954",
      },
      spacing: {},
      fontFamily: {
        "circular-std": "'Circular Std'",
        "noto-sans-cjk-kr": "'Noto Sans CJK KR'",
      },
      borderRadius: {
        "481xl": "500px",
        "15xl-6": "34.6px",
        "10xs-3": "2.3px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "12px",
      mini: "15px",
      "smi-5": "12.5px",
      "5xl": "24px",
      sm: "14px",
      base: "16px",
      mid: "17px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
